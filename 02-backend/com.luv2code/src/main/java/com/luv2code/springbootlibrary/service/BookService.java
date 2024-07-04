package com.luv2code.springbootlibrary.service;

import com.luv2code.springbootlibrary.dao.BookRepository;
import com.luv2code.springbootlibrary.dao.CheckoutRepository;
import com.luv2code.springbootlibrary.entity.Book;
import com.luv2code.springbootlibrary.entity.Checkout;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

// 1. user Request coming
// 2. Controller receive the request and calls Service
// 3. Service handle a business logic and calls Repository
// 4. Repository manipulates a database
@Service
@Transactional
public class BookService {
    private BookRepository bookRepository;
    private CheckoutRepository checkoutRepository;

    public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository) {
        this.bookRepository = bookRepository;
        this.checkoutRepository = checkoutRepository;
    }

    // 本の貸し出し
    public Book checkoutBook(String userEmail, Long bookId) throws Exception {
        Optional<Book> book = bookRepository.findById(bookId);

        // 特定のユーザーが特定の本を既に借りているかどうかを確認するために、findByUserEmailAndBookId メソッドを使用
        Checkout existingCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);

        // 本が存在しない、既に貸し出されている、または利用可能なコピーがない場合の処理
        if (!book.isPresent() || existingCheckout != null || book.get().getCopiesAvailable() <= 0) {
            throw new Exception("Book doesn't exist or already checked out by user");
        }

        // 本の利用可能なコピー数を減らし、データベースを更新
        book.get().setCopiesAvailable(book.get().getCopiesAvailable() - 1);
        bookRepository.save(book.get());

        // 新しい貸し出し情報を作成し、データベースに保存
        Checkout checkout = new Checkout(userEmail, LocalDate.now().toString(), LocalDate.now().plusDays(7).toString(), book.get().getId());
        checkoutRepository.save(checkout);

        return book.get();
    }

    public Boolean checkoutBookByUser(String userEmail, Long bookId) {
        // 特定のユーザーが特定の本を既に借りているかどうかを確認するために、findByUserEmailAndBookId メソッドを使用
        Checkout existingCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        return existingCheckout != null ? true : false;
    }
}
