import { Button } from "@/components/ui/button"

import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';

import musicVideo from '@/images/video.mp4'


const Home = () => {

// lg: w-96 xl:w-96

// 
  return (
    
    <div className=' mx-0 lg:max-w-9xl
    h-screen 
    flex lg:flex-row flex-col
    bg-gradient-to-r from-cyan-400 to-green-300 border-2 border-blue-gray-600'>
        <div className="w-64 lg:w-4/6 p-10 flex flex-col items-center justify-center">
          <p className="text-sm md:text-lg font-poppins text-center mb-5 lg:mb-10">"You're invited to join us as we tie the knot and embark on this beautiful journey together."</p>
          <h2 className="font-natalia text-5xl lg:text-9xl text-center">Kirby</h2>
          <p className="font-natalia text-lg lg:text-4xl text-center">and</p>
          <h2 className="font-natalia text-5xl lg:text-9xl text-center">Genevieve</h2>
         
          <Button className="lg:mt-8 mt-5 lg:w-72 w-40">
            <Link to='/info' className='lg:text-md text-xs font-poppins '>See Details</Link>
          </Button>
        </div>
        <ReactPlayer
          className=' w-96 lg:2/6 p-0 m-0 h-full'
          url={musicVideo} 
          width="100%"
          height="100%"
          controls={true}
          playing={true}
        />
    </div>
  );
}

export default Home;
