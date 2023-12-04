import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'

import info2 from '@/images/info2.png'
import info3 from '@/images/info1.png'
import info4 from '@/images/info3.png'
import lastpic from '@/images/2.jpg'

export function CarouselDefault() {

  const GoogleLink = "https://l.messenger.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSeV13SYOvAqOjUUePQ_0y8SeS6P4hokeC9RdjrphHaZ-Ynhbg%2Fviewform&h=AT1F8twMwNeL_23j5eBswWmxoQsXVr54DTZ0TdtIKPrd9K0wLIzSeCp4hxUJHg5-sx_zOOpZoq7WE0ErxQdnbKiW-DotyTmcJmfui7ualbIrv1JZ-A5J7u92-9lBVbBua5OakA";

  // w-[420px] md:max-w-md lg:w-[1320px] 

  return (
    <>
    
    <div className="flex lg:flex-row flex-col max-w-8xl h-auto justify-center items-center">
      <div className="w-96 lg:w-1/2" >
          <img
          className=" w-96 lg:w-full  h-96 sm:h-screen"
          src={lastpic} alt="" />
      </div>
      <div className="w-96 lg:w-1/2 flex items-center justify-center h-screen">
              <Tabs defaultValue="image1" 
              className=" w-full flex flex-col items-center justify-center">
              <TabsList className="lg:flex-row flex-col lg:gap-0 gap-2 lg:w-[600px] w-96 lg:h-10 h-40 items-center justify-center">
                <TabsTrigger
                className="w-56  font-poppins text-green-500 active:bg-green-400 hover:border-2 hover:border-green-500"
                value="image1">Families and Sponsors</TabsTrigger>
                <TabsTrigger
                className="w-56  font-poppins  text-green-500 active:text-brown-500  hover:border-2 hover:border-green-500"
                value="image2">Entourage</TabsTrigger>
                <TabsTrigger
                className="w-56 font-poppins  text-green-500 active:text-brown-500  hover:border-2 hover:border-green-500"
                value="image3">Guest Guide</TabsTrigger>
              </TabsList>
              <TabsContent value="image1">
                  <img
                  className="w-[300] sm:w-[400px] h-[450px] sm:h-[550px]" 
                  src={info3} alt="" />
              </TabsContent>
              <TabsContent value="image2">
                <img
                className="w-[400px] h-[550px] " 
                src={info2} alt="" /> 
              </TabsContent>
              <TabsContent value="image3">
                <img
                className="w-[400px] h-[550px]"  
                src={info4} alt="" />
              </TabsContent>
        </Tabs>
      </div>
    </div>
    <div className="flex items-center justify-center my-10">
        <Button><a
        className="font-poppins lg:w-96 md:w-72 w-40 " 
        href={GoogleLink}>Accept the Invitation</a></Button>
    </div>
    </>
  );
}
        