import logo from './logo.svg';
import './App.css';
import './global.css';

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WhishList from './pages/Whishlist';
import NotExist from './pages/NotExist';
import ProductPage from './pages/Product';
import ListUser from './components/users/ListUser';
import UpdateUser from './components/users/UpdateUser';
import CreateUser from './components/users/CreateUser';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='whishList' element={<WhishList/>}></Route>
          <Route path='product' element={<ProductPage/>}></Route>
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<UpdateUser />} />
          <Route path="user/list" element={<ListUser />} />
        </Route>
        <Route path='*' element={<NotExist/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
