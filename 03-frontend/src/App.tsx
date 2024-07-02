import Navbar from './components/navbar/Navbar.tsx';
import HomePage from './components/homepage/HomePage.tsx';
import BooksCarousel from './components/homepage/BooksCarousel.tsx';
import Heros from './components/homepage/Heros.tsx';
import Footer from './components/footer/Footer.tsx';
import LibraryService from './components/homepage/LibraryService.tsx';
import SearchBookPage from './components/searchBookPage/SearchBookPage.tsx';

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
    </>
  );
}
