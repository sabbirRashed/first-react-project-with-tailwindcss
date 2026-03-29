import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';



const NavBar = () => {
    const [open, setOpen] = useState(false);

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
            name: 'Services',
            path: '/services',
            id: 4,
        },

        {
            name: 'Blog',
            path: '/blog',
            id: 5,
        },

        {
            name: 'Contuct Us',
            path: '/contactUs',
            id: 3,
        },
    ]

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='shadow-sm '>

            <div className='max-w-335 mx-auto flex justify-between items-center px-8 py-3 '>
                <span className='flex gap-2 items-center' onClick={() => { setOpen(!open) }}>
                    {open ?
                        <X className='md:hidden'></X>
                        : <Menu className='md:hidden'></Menu>
                    }

                    <ul className={`md:hidden absolute bg-base-200 p-2 rounded-sm border border-gray-200 duration-800
                    ${open ?
                            'top-14 left-0' : 'top-14 -left-50'}`}>
                        {
                            links
                        }
                    </ul>

                    <h2 className='font-semibold text-2xl'>Logo</h2>
                </span>

                <ul className='hidden md:flex gap-10'>
                    {
                        links
                    }
                </ul>

                <button className='btn'>Sign in</button>
            </div>

        </nav>
    );
};

export default NavBar;