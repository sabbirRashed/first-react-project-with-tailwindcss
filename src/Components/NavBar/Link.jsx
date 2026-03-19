import React from 'react';

const Link = ({route}) => {
    console.log(route.name)
    return (
        <li className='mr-7 px-3 py-1 hover:bg-gray-200'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;