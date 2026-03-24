import { Suspense } from 'react';
import './App.css';
import DaisyNav from './Components/Daisy-Nav/Daisy-Nav';
import NavBar from './Components/NavBar/NavBar';
import PricingOptions from './Components/PricingOptions/PricingOptions';


const pricingPromise = fetch('pricingData.json')
  .then(res => res.json())


function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </>
  )
}

export default App
