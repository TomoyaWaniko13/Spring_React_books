import SignupOrExploreButtons from '../auth/signup-or-explore-buttons.tsx';

const Heros = () => {
  return (
    <div className={'flex flex-col'}>
      <div className={'flex flex-col lg:flex-row'}>
        <div className={'w-full lg:w-1/2'}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Retriever_in_water.jpg' alt='' />
        </div>
        <div className={'w-full lg:w-1/2 flex flex-col space-y-4 justify-center items-center p-10'}>
          <h2 className={'text-5xl font-bold'}>What have you been reading?</h2>
          <p>
            The library team would love to know hat you have been reading. Whether it is to learn a new skill or grow
            within one, we will be able to provide the top content for you!
          </p>
          <SignupOrExploreButtons />
        </div>
      </div>
      <div className={'flex flex-col lg:flex-row'}>
        <div className={'w-full lg:w-1/2 flex flex-col space-y-4 justify-center items-center p-10'}>
          <h2 className={'text-5xl font-bold'}>Our collection is always changing!</h2>
          <p>
            Try to check in daily as our collection is always changing! We work nonstop to provide the most accurate
            book selection possible for our Luv 2 Read students! We are diligent about our book selection and our books
            are always going to be our top priority.
          </p>
        </div>
        <div className={'w-full lg:w-1/2'}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Retriever_in_water.jpg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Heros;
