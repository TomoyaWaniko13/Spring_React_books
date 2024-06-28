import Navbar from './components/Navbar.tsx';
import HomePage from './components/HomePage.tsx';
import Carousel from './components/Carousel.tsx';
import Heros from './components/Heros.tsx';
import Footer from './components/Footer.tsx';
import LibraryService from './components/LibraryService.tsx';

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Carousel />
      <Heros />
      <LibraryService />
      <Footer />
    </>
  );
}
