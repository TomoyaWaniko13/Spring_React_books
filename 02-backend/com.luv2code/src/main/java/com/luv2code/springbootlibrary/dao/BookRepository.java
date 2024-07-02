package com.luv2code.springbootlibrary.dao;

import com.luv2code.springbootlibrary.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface BookRepository extends JpaRepository<Book, Long> {
    // The method findByTitleContaining is a custom query method. In Spring Data JPA,
    // you can define methods in the repository interface, and Spring will automatically
    // implement them for you. The method name itself describes the query to be implemented.

    // This method will return a Page of Book objects where the title of the book contains
    // the provided title string. The Page object is a part of Spring Data's domain module,
    // and it is a sublist of items in a list for a page. The Page interface also provides
    // additional information about the data like the total number of pages, whether it is the
    // first or the last page, and so on.
    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

    Page<Book> findByCategory(@RequestParam("category") String category, Pageable pageable);
}
