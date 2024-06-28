const HomePage = () => {
  return (
    <div className={'w-full h-screen mx-auto text-center flex flex-col items-center justify-center space-y-4'}>
      <p className={'text-3xl sm:text-4xl md:text-9xl font-extrabold'}>find your next adventure</p>
      <h1 className={'text-3xl'}>where would you like to go next?</h1>
      <button className={'p-3 bg-black text-white rounded text-xl'}>explore top books</button>
    </div>
  );
};

export default HomePage;
