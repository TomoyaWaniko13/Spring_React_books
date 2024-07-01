import { useEffect, useState } from 'react';
import BookModel from '../models/BookModel.ts';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel.tsx';
import { Card, CardContent } from './ui/card.tsx';
import { Button } from './ui/button.tsx';

const BooksCarousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

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
    <div className={'flex flex-col justify-center items-center space-y-10 p-10'}>
      <h3 className={'text-6xl font-extralight'}>find your next "I stayed up too late reading" book.</h3>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-6xl'
      >
        <CarouselContent>
          {books.slice(0, 6).map((book) => (
            <CarouselItem key={book.id} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex flex-col aspect-square items-center justify-center space-y-3 p-6'>
                    <img src={book.img} alt='' />
                    <h6 className={'mt-2 text-xl'}>{book.title}</h6>
                    <p className={'text-xl'}>{book.author}</p>
                    <Button variant={'default'} size={'lg'}>
                      reserve
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className={'flex justify-center items-center space-x-4 text-center'}>
        <Button variant={'outline'} size={'lg'}>
          view more
        </Button>
      </div>
    </div>
  );
};

export default BooksCarousel;
