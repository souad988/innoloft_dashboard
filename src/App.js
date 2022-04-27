import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Navigation from './pages/navigation/Navigation';
import Product from './pages/product/Product';
import Main from './pages/Main';

function App() {
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
