import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, HOME_PAGE } from '../config';

const HeaderComponent = () => {
  return (
    <header>
      <nav className='header'>
        <Link to={HOME_PAGE}>Главная страница</Link>
        <Link to={ABOUT_PAGE}>О нас</Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
