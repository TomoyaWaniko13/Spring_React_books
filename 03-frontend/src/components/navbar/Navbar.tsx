import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={'flex justify-between items-center text-white bg-black p-3 h-28'}>
      <h1 className={'w-full text-6xl font-extrabold text-white'}>Luv 2 Read</h1>
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
        <li className={'p-4'}>
          <a href='' className={'whitespace-nowrap'}>
            Sign in
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className={'block md:hidden'}>
        {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-[-100%]'
            : 'fixed left-0 top-0 w-3/5 h-full border-r border-black bg-black p-3 ease-in-out duration-300'
        }
      >
        <h1 className={'w-full text-3xl font-bold text-white'}>Luv 2 Read</h1>
        <ul>
          <li className={'p-4 border-b border-gray-400'}>
            <a href=''>Home</a>
          </li>
          <li className={'p-4 border-b border-gray-400'}>
            <a href=''>Search Books</a>
          </li>
          <li className={'p-4 border-b border-gray-400'}>
            <a href=''>Sign in</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
