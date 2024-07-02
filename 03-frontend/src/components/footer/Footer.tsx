const Footer = () => {
  return (
    <footer className={'bg-black  text-white h-24 p-10 flex items-center justify-between'}>
      <div>
        <p>©Example Library App, Inc</p>
      </div>
      <div>
        <ul className={'flex space-x-4'}>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Search books</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
