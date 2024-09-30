import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Menu from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Orders from '../pages/Orders/Orders';

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;