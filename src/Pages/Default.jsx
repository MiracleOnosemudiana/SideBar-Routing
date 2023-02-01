import React from 'react';
import Sidebar from '../components/LEFT SIDE/Sidebar';
import OffcanvasSideNav from '../components/LEFT SIDE/OffcanvasSideNav';
import Rightside from '../components/RIGHT SIDE/Rightside';
import Home from '../components/RIGHT SIDE/Home';
import Profile from '../components/RIGHT SIDE/Profile';
import Wallet from '../components/RIGHT SIDE/Wallet';
import { Routes, Route } from 'react-router-dom';

const Default = () => {
    return (
        <div className='row'>
            <OffcanvasSideNav />
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/wallet' element={<Wallet />} />
                <Route path='/righthandside' element={<Rightside />} />
            </Routes>

        </div>
    );
}

export default Default;
