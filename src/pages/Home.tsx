import { Button } from "@/components/ui/button"

import { Link } from 'react-router-dom'
import HomeImage from '../images/7.jpg'

import Timer from '@/components/parts/Timer'

const Home = () => {


  return (
    
    <div className=' mx-0 w-full
    h-full sm:h-screen
    flex  md:flex-row flex-col mobile:items-center mobile:justify-center
    bg-gradient-to-r from-yellow-50 to-green-300 border-2 border-blue-gray-600'>
        <div className="w-96 lg:w-3/5 p-10 flex flex-col items-center justify-center">
          <p className="text-sm md:text-lg font-poppins text-center mb-5 lg:mb-10">"You're invited to join us as we tie the knot and embark on this beautiful journey together."</p>
          <h2 className="font-natalia text-5xl lg:text-9xl text-center">Kirby</h2>
          <p className="font-natalia text-lg lg:text-4xl text-center">and</p>
          <h2 className="font-natalia text-5xl lg:text-9xl text-center">Genevieve</h2>
          <hr />
          <Timer />
         
          <Button className="lg:mt-8 mt-5 lg:w-72 w-40">
            <Link to='/info' className='lg:text-md text-xs font-poppins '>See Details</Link>
          </Button>
        </div>
        <img
          className='flex w-40 sm:w-[400px] lg:w-[400px] mobile:self-center pop-0 m-0 h-full overflow-x-hidden'
         src={HomeImage} alt="" />
    </div>
  );
}

export default Home;
