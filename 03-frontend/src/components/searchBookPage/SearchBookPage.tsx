import BookModel from '../../models/BookModel.ts';
import { useEffect, useState } from 'react';
import { Button, buttonVariants } from '../ui/button.tsx';
import BookPagination from './BookPagination.tsx';
import SearchBar from '../SearchBar.tsx';
import BookList from '../BookList.tsx';

const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [category, setCategory] = useState('bottom');

  const [searchInput, setSearchInput] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';

      let url: string = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;

      if (searchUrl === '') {
        url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
      } else {
        url = baseUrl + searchUrl;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseJson = await response.json();
        const responseData = responseJson._embedded.books;

        setTotalAmountOfBooks(responseJson.page.totalElements);
        setTotalPages(responseJson.page.totalPages);

        const loadedBooks: BookModel[] = responseData.map((book: any) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          description: book.description,
          copies: book.copies,
          copiesAvailable: book.copiesAvailable,
          category: book.category,
          img: book.img,
        }));

        setBooks(loadedBooks);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchBooks();
  }, [currentPage, searchUrl]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (httpError) {
    return <div className='text-4xl'>{httpError}</div>;
  }

  const handleSearchChange = () => {
    if (searchInput === '') {
      setSearchUrl('');
    } else {
      setSearchUrl(`/search/findByTitleContaining?title=${searchInput}&page=0&size=${booksPerPage}`);
    }
  };

  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;

  let lastItemIndex =
    booksPerPage * currentPage <= totalAmountOfBooks ? booksPerPage * currentPage : totalAmountOfBooks;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className={'flex flex-col items-center space-y-4 p-7 w-full'}>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchChange={handleSearchChange}
        category={category}
        setCategory={setCategory}
      />

      {totalAmountOfBooks ? (
        <>
          <section className={'flex flex-col w-full space-y-3'}>
            <h3 className={'font-bold text-2xl'}>Number of results: ({totalAmountOfBooks})</h3>
            <p>
              {indexOfFirstBook + 1} to {lastItemIndex} of {totalAmountOfBooks} items:
            </p>
          </section>
          <BookList books={books} />
        </>
      ) : (
        <div className={'flex flex-col justify-center items-center space-y-4'}>
          <h3 className={'font-bold text-5xl'}>Can't find what you are looking for??</h3>
          <Button variant={'default'} size={'lg'} className={'max-w-1/2'}>
            <a href=''>Library Service</a>
          </Button>
        </div>
      )}

      {totalPages > 1 && <BookPagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />}
    </main>
  );
};

export default SearchBookPage;
