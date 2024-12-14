import './styles.css';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img
          src='src/assets/react.svg'
          alt='logo'
        />
      </div>

      <nav className='nav nav--music'>
        <a
          className='nav__el'
          href='/'>
          Home
        </a>
        <div className='nav__search'>
            <div className='nav__search-btn'>🔍</div>
          <input className='nav__search-input' placeholder='What do you want to play?' />
        </div>
      </nav>

      <nav className='nav--user'>
        <a className='nav__el '>Sign up</a>
        <a className='nav__el nav__el--cta'>Log in</a>
      </nav>
    </header>
  );
};

export default Navbar;
