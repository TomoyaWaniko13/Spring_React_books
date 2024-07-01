import Navbar from './components/Navbar.tsx';
import HomePage from './components/HomePage.tsx';
import BooksCarousel from './components/BooksCarousel.tsx';
import Heros from './components/Heros.tsx';
import Footer from './components/Footer.tsx';
import LibraryService from './components/LibraryService.tsx';
import SearchBookPage from './components/SearchBookPage.tsx';
import CarouselExperiment from './components/CarouselExperiment.tsx';
import DropDownMenuExperiment from './components/DropDownMenuExperiment.tsx';

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BooksCarousel />
      <Heros />
      <LibraryService />
      <Footer />
      <SearchBookPage />
      <CarouselExperiment />
      <DropDownMenuExperiment />
    </>
  );
}
