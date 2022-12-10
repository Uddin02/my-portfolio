import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div style={{ minHeight: "100vh" }} className='bg-[#E7FEFF] mx-8' >
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;