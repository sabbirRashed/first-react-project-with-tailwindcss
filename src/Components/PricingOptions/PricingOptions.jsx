import React, { use } from 'react';
import PricingCard from '../PricingCards/PricingCard';
import DaisyPricingCard from '../DaisyPricingCards/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData)
    return (
        <div className='max-w-335 mx-auto'>
            <h2>Get Out Membership</h2>
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