import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Header from './pages/header/Header';
import Navigation from './pages/navigation/Navigation';
import Product from './pages/product/Product';
import Main from './pages/Main';
import { getProduct } from './store/reducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
