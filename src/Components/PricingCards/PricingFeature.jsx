import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    console.log(feature)
    return (
        <p className='flex items-center gap-1 mt-3'><CircleCheck className='text-[#8E977D]'></CircleCheck>{feature}</p>
    );
};

export default PricingFeature;