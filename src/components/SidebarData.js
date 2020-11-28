import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
        title : 'Home',
        path: '/',
        icons: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title : 'Report',
        path: '/reports',
        icons: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title : 'Products',
        path: '/products',
        icons: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title : 'Team',
        path: '/teams',
        icons: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title : 'Login/Sign-up',
        path: '/Signup',
        icons: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    }
]