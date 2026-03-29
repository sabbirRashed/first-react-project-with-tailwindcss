import React, { use } from 'react';
import PricingCard from '../PricingCards/PricingCard';
import DaisyPricingCard from '../DaisyPricingCards/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData)
    return (
        <div className='max-w-335 mx-auto'>
            <h2 className='text-2xl text-center p-2 border-b-2 border-b-primary max-w-80 mx-auto mb-8'>(Practice Task 1)</h2>
            <h2 className='text-2xl mb-5'>Get Our Membership</h2>
            <div className=' border border-gray-200 grid md:grid-cols-2 lg:grid-cols-3 gap-10' >
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}


                {/* daisy pricing card */}
                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;