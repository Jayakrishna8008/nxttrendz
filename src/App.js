import {  Route, Routes } from 'react-router-dom';

import LoginForm  from "./components/LoginForm";
import NotFound from './components/NotFound';
import Home from './components/Home'
import Cart from './components/Cart'
import ProductItemDetails from './components/ProductItemDetails'

import Products  from './components/Products';


const App=()=> (
    <Routes>
        <Route path="/login" element={<LoginForm/>}/>
         <Route path="/not-found" element={<NotFound/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path="/products/:id" element={<ProductItemDetails />}/>
       
    </Routes>
)

export default App