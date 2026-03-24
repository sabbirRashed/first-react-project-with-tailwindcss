import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    console.log(pricing)
    const { name, price, month, description, features } = pricing;
    return (
        <div className='bg-[#8E977D] text-white border border-[#8A7650] p-6 rounded-2xl  flex flex-col'>
            <h2 className='text-2xl'>{name}</h2>
            <p className='text-5xl'>{price}<span className='text-lg'>{month}</span></p>
            <div className='bg-[#cec091] rounded-xl p-4 mt-4 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className='btn w-full bg-[#cec091] shadow-none mt-2'>Subscribe</button>
        </div>
    );
};

export default PricingCard;