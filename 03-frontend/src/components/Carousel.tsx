import { useEffect, useState } from 'react';
import BookModel from '../models/BookModel.ts';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? books.length - 1 : prevIndex - 1));
  };

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex === books.length - 1 ? 0 : prevIndex + 1));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (httpError) {
    return <div className='text-4xl'>{httpError}</div>;
  }

  return (
    <div className='bg-black text-white py-12 px-4 w-full flex flex-col'>
      <h3 className='text-center font-bold font-mono text-5xl pb-10'>
        Find your next "I stayed up too late reading" book.
      </h3>
      <div className='w-full max-w-[1400px] h-[780px] m-auto relative group'>
        <div
          style={{ backgroundImage: `url(${books[currentIndex].img})` }}
          className='w-full h-full rounded-2xl bg-cover duration-300'
        ></div>
        <div
          className='hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          onClick={prevBook}
        >
          <FaChevronLeft size={30} />
        </div>
        <div
          className='hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          onClick={nextBook}
        >
          <FaChevronRight size={30} />
        </div>
      </div>
      <div className='flex justify-center space-x-4 pt-14'>
        <button className='bg-white text-black p-3 rounded'>Reserve</button>
        <button className='bg-white text-black p-3 rounded'>View More</button>
      </div>
    </div>
  );
};

export default Carousel;
