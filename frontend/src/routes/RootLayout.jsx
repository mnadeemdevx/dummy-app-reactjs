import React from 'react';
import { MainHeader } from '../components';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
};

export default RootLayout;
