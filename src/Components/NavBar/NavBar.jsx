import React from 'react';
import Link from './Link';

const NavBar = () => {

    const navigationData = [
        {
            name: 'Home',
            path: '/home',
            id: 1,
        },
        {
            name: 'About',
            path: '/about',
            id: 2,
        },
        {
            name: 'Contuct Us',
            path: '/contactUs',
            id: 3,
        },
        {
            name: 'Services',
            path: '/services',
            id: 4,
        },
        {
            name: 'Blog',
            path: '/blog',
            id: 5,
        }
    ]

    return (
        <nav className='shadow-sm'>
            {/* <ul className='flex p-5'>
                <li className='mr-5'><a href="home">Home</a></li>
                <li className='mr-5'><a href="/about">About</a></li>
                <li className='mr-5'><a href="/contact">Contact Us</a></li>
            </ul> */}

            {/* <ul className='flex p-5'>
                {
                    navigationData.map(route => <li className='mr-4 p-2 hover:bg-gray-300'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}


            <ul className='flex p-5'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;