import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image1 from '@/images/image1.jpg'
import { CarouselDefault } from "./CarouselDefault";
const ReceptionLocation : string = "https://www.google.com/maps/place/Garces+Royal+Garden+Catering+Services/@10.2591417,123.8403813,17z/data=!3m1!4b1!4m6!3m5!1s0x33a99d276c0b8e17:0x405fa71e8c744131!8m2!3d10.2591417!4d123.8403813!16s%2Fg%2F1hc1_jc10?entry=ttu";
const ChurchLocation : string = "https://www.google.com/maps/search/sto+nino+de+cebu+mohon+talisay+city/@10.2508523,123.823338,16z/data=!3m1!4b1?entry=ttu";


const ToggleElements = () => {
  return (

    <div className="flex flex-col max-w-8xl">
      <div className='flex lg:flex-row flex-col h-full lg:h-screen'>
        <section className='w-96 md: 2/6 lg:w-2/5  flex flex-col items-center justify-center lg:justify-start pt-0 lg:pt-10 lg:p-0 p-4 lg:mb-0 mb-4'>
              <Tabs defaultValue="event">
              <TabsList className='lg:w-96 md:w-72 w-40 bg-gradient-to-r from-cyan-400 to-green-300'>
                  <h1 className="font-poppins lg:text-2xl text-lg text-white ">Event</h1>
              </TabsList> 
              <TabsContent
                className='w-96 h-96 lg:w-[400px] lg:h-[320px] flex flex-col items-start gap-2 my-5'
                value="event">

                <Card className="lg:w-96 md:w-72 w-56">
                  <CardHeader>
                    <CardTitle className=' text-sm md:text-md lg:text-2xl font-poppins text-green-500'>Wedding Ceremony</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-1">
                      <h5 className='lg:text-sm text-xs  font-poppins'>Venue: Sto. Niño de Cebu Parish, Talisay City</h5>
                      <h5 className='lg:text-sm text-xs  font-poppins'>Date:  January 6, 2024, Saturday</h5>
                      <h5 className='lg:text-sm text-xs  font-poppins'>Time:  2:00 PM</h5>
                  </CardContent>
                  <CardFooter>
                    <Button
                    className='font-poppins lg:w-96 md:w-72 w-40 bg-gradient-to-r from-cyan-400 to-green-300 hover:bg-white hover:border-2 hover:border-blue-300'
                    ><a href={ChurchLocation}>View Ceremony Location</a></Button>
                  </CardFooter>
                </Card>

                <Card className="lg:w-96 md:w-72 w-56 ">
                  <CardHeader>
                    <CardTitle className='text-md lg:text-2xl font-poppins text-green-500'>Reception</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-1">
                  <h5 className='lg:text-sm text-xs  font-poppins'>Venue:  
                <a
                className='lg:text-sm text-xs '
                href={ReceptionLocation}> Garces Royal Garden</a></h5>
                  </CardContent>
                  <CardFooter>
                    <Button
                    className='font-poppins lg:w-96 w-72  bg-gradient-to-r from-cyan-400 to-green-300 hover:bg-white hover:border-2 hover:border-blue-300'
                    ><a href={ReceptionLocation}>View Reception Location</a></Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
        </section>
        <section className="w-96 md:4/6 lg:w-3/5 " >
          <img
          className='w-full h-full'
          src={Image1} alt="" />
        </section>
      </div>
      
      <div>
          <CarouselDefault />
      </div>
      </div>
     
    
   
  );
}

export default ToggleElements;
