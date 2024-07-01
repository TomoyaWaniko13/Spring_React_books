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

const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  const [category, setCategory] = useState('bottom');

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = 'http://localhost:8080/api/books';
      const url: string = `${baseUrl}?page=0&size=9`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const responseJson = await response.json();
        const responseData = responseJson._embedded.books;
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

  return (
    <div className={'flex justify-center items-center space-x-4 p-3'}>
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
  );
};

// All, Front End, Back End, Data, DevOps
export default SearchBookPage;
