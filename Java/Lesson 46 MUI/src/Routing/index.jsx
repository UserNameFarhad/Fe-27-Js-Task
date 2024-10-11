import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import NotFound from '../Pages/NotFound'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'
import ProductsSingle from '../Pages/ProductsSingle'
import ShoppingCart from '../Pages/ShoppingCart'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/products' element={<Products />} />
                <Route path='/productsSingle' element={<ProductsSingle />} />
                <Route path='/cart' element={<ShoppingCart />} />
            </Routes>
        </>
    )
}

export default Routing