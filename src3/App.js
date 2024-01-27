import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import whishList from './pages/Whishlist';
import NotExist from './pages/NotExist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='whishList' element={<whishList/>}></Route>
          <Route path='*' element={<NotExist/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
