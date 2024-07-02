import Navbar from './components/navbar/Navbar.tsx';
import Footer from './components/footer/Footer.tsx';
import SearchBookPage from './components/searchBookPage/SearchBookPage.tsx';
import HomePage from './components/homepage/HomePage.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import BookCheckoutPage from './components/BookCheckoutPage/BookCheckoutPage.tsx';
import SheetExperiment from './components/Experiment/SheetExperiment.tsx';

export default function App() {
  return (
    <div className={'flex flex-col min-h-screen'}>
      <Navbar />
      <div className={'flex-grow'}>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/search' element={<SearchBookPage />} />
          <Route path={'/checkout/:bookId'} element={<BookCheckoutPage />} />
        </Routes>
      </div>
      <Footer />
      <SheetExperiment />
    </div>
  );
}
