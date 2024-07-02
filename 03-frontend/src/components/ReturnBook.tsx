import BookModel from '../models/BookModel.ts';
import React from 'react';
import { Button } from './ui/button.tsx';

const ReturnBook: React.FC<{ book: BookModel }> = (props) => {
  console.log(props);
  return (
    <div className={'flex flex-col items-center space-y-4 pt-10'}>
      <div>
        <img src={props.book.img} alt='' />
      </div>
      <div>
        <div className={'mt-2 text-xl'}>{props.book.title}</div>
        <div className={'text-xl'}>{props.book.author}</div>
      </div>
      <div className='flex justify-center space-x-4'>
        <Button variant={'default'} size={'lg'}>
          reserve
        </Button>
        <Button variant={'default'} size={'lg'}>
          view more
        </Button>
      </div>
    </div>
  );
};

export default ReturnBook;
