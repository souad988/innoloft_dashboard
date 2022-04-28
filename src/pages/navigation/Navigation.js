import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './Navigation.module.css';

function Navigation() {
  return (
    <div className={style.navigationContainer}>
      <nav className={style.nav}>
        <Link to="/">
          <i className="fas fa-home" />
          home
        </Link>
        <Link to="/product">
          <i className="fab fa-product-hunt" />
          {' '}
          product
        </Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Navigation;
