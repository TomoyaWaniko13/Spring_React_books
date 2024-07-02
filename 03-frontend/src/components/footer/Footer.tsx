import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={'bg-black  text-white h-24 p-10 flex items-center justify-between'}>
      <div>
        <p>©Example Library App, Inc</p>
      </div>
      <div>
        <ul className={'flex space-x-4'}>
          <li>
            <NavLink
              to={'/home'}
              className={({ isActive }) => (isActive ? 'whitespace-nowrap text-blue-500' : 'whitespace-nowrap')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/search'}
              className={({ isActive }) => (isActive ? 'whitespace-nowrap text-blue-500' : 'whitespace-nowrap')}
            >
              Search Books
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
