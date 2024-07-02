import LandingPage from './LandingPage.tsx';
import BooksCarousel from './BooksCarousel.tsx';
import Heros from './Heros.tsx';
import LibraryService from './LibraryService.tsx';

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <BooksCarousel />
      <Heros />
      <LibraryService />
    </>
  );
};

export default HomePage;
