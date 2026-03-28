import { Suspense } from 'react';
import './App.css';
import DaisyNav from './Components/Daisy-Nav/Daisy-Nav';
import NavBar from './Components/NavBar/NavBar';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import ResultChart from './Components/Result-Chart/ResultChart';
import axios from 'axios';
import MarksChart from './Components/MarksChart/MarksChart';


const pricingPromise = fetch('/pricingData.json')
  .then(res => res.json());
const marksPromise = axios.get('/marksData.json');


function App() {

  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <div className='max-w-335 mx-auto'>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </div>
    </div>
  )
}

export default App
