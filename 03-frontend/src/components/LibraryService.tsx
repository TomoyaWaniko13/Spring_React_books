import { Button } from './ui/button.tsx';

const LibraryService = () => {
  return (
    <div className={'p-16'}>
      <div className={'shadow-2xl shadow-gray-300 flex flex-row space-x-4 items-center justify-center p-10'}>
        <div className={'flex flex-col space-y-6'}>
          <h3 className={'font-bold text-5xl'}>Can't find what you are looking for?</h3>
          <p>If you cannot find what you are looking for, send our library admin's a personal message!</p>
          {/*TODO fix the button size.*/}
          <Button size={'lg'}>Sign up</Button>
        </div>
        <div className={'w-1/3'}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Retriever_in_water.jpg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default LibraryService;
