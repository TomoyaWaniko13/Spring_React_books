import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet.tsx';
import LoginOrLogoutButtons from '../auth/login-or-logout-buttons.tsx';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // TODO fix the sticky navbar with the <BookCarousel /> component.
    <nav className={'flex items-center text-white bg-black px-10 h-20 sticky top-0'}>
      <h1 className={'w-full text-4xl font-extrabold text-white'}>Luv 2 Read</h1>
      <ul className={'hidden md:flex justify-between items-center'}>
        <li className={'p-4'}>
          <NavLink
            to={'/home'}
            className={({ isActive }) => (isActive ? 'whitespace-nowrap text-blue-500' : 'whitespace-nowrap')}
          >
            Home
          </NavLink>
        </li>
        <li className={'p-4'}>
          <NavLink
            to={'/search'}
            className={({ isActive }) => (isActive ? 'whitespace-nowrap text-blue-500' : 'whitespace-nowrap')}
          >
            Search Books
          </NavLink>
        </li>
        <li>
          <LoginOrLogoutButtons />
        </li>
      </ul>
      <div onClick={handleNav} className={'block md:hidden'}>
        <Sheet>
          <SheetTrigger>{nav ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}</SheetTrigger>
          <SheetContent className='w-[350px] sm:w-[440px]' side={'left'}>
            <SheetHeader>
              <SheetTitle>
                <ul>
                  <li className={'p-4 border-b border-gray-400'}>
                    <NavLink
                      to={'/home'}
                      className={({ isActive }) => (isActive ? 'whitespace-nowrap text-blue-500' : 'whitespace-nowrap')}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className={'p-4 border-b border-gray-400'}>
                    <NavLink
                      to={'/search'}
                      className={({ isActive }) => (isActive ? 'whitespace-nowrap text-blue-500' : 'whitespace-nowrap')}
                    >
                      Search Books
                    </NavLink>
                  </li>
                </ul>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
