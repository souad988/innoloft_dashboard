import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './Navigation.module.css';

function Navigation() {
  return (
    <div className={style.navigationContainer}>
      <nav className={style.nav}>
        <Link to="/">
          home
        </Link>
        <Link to="/product">
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
