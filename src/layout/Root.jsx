import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const Root = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;