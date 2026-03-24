import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    console.log(feature)
    return (
        <p className='flex items-center gap-1 mt-2'><CircleCheck></CircleCheck>{feature}</p>
    );
};

export default PricingFeature;