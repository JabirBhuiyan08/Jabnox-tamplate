import React from 'react';
// import Navbar from '../nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Main = () => {
    return (
        <div className='w-full bg-slate-50 text-slate-900 font-sans antialiased'>
            {/* <Navbar></Navbar> */}
            <div className='container mx-auto min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;