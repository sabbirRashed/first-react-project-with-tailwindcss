import React from 'react';

const Link = ({route}) => {
    
    return (
        <li className=' px-3 py-1 font-medium hover:bg-gray-200'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;