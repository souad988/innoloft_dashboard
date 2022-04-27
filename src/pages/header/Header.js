import React from 'react';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.headerContainer}>
      {' '}
      <img className={style.img} src="https://img.innoloft.com/logo.svg" alt="logo" />
    </div>
  );
}

export default Header;
