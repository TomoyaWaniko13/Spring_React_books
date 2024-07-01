import BookModel from '../models/BookModel.ts';
import { useEffect, useState } from 'react';
import { Input } from './ui/input.tsx';
import { Button } from './ui/button.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.tsx';
import Pagination from './BookPagination.tsx';

const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [category, setCategory] = useState('bottom');

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';

      const url: string = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;

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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (httpError) {
    return <div className='text-4xl'>{httpError}</div>;
  }

  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ? booksPerPage * currentPage : totalAmountOfBooks;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={'flex flex-col items-center space-y-4 p-7 w-full'}>
      <div className={'flex flex-row justify-start items-center space-x-4 w-full'}>
        <Input placeholder={'search'} type={'search'} className={'max-w-3xl'} />
        <Button type='submit'>search</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'outline'}>Book Category</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Book Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
              <DropdownMenuRadioItem value='all'>All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='front end'>Front End</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='back end'>Back End</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='data'>Data</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='devops'>DevOps</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className={'flex flex-col w-full space-y-3'}>
        <h3 className={'font-bold text-2xl'}>Number of results: (22)</h3>
        <p>1 to 5 of 22 items:</p>
      </div>
      <div>
        {books.slice(0, 6).map((book) => (
          <Card className={'flex flex-row   justify-center space-y-3 p-6'}>
            <CardHeader className={'flex flex-col space-x-10'}>
              <CardTitle>
                <img src={book.img} alt='' />
              </CardTitle>
              <CardDescription>
                <p>{book.author}</p>
                <p>{book.title}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className={'max-w-2xl flex flex-col space-y-4'}>
              <p>{book.description}</p>
              <Button>view details</Button>
            </CardContent>
          </Card>
        ))}
        {/* Only render <Pagination/> if totalPages > 1 */}
        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />}
      </div>
    </div>
  );
};

export default SearchBookPage;
