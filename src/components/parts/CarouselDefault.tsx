import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'

import info2 from '@/images/info2.jpg'
import info3 from '@/images/info3.jpg'
import info4 from '@/images/info4.jpg'
import lastpic from '@/images/2.jpg'

export function CarouselDefault() {

  const GoogleLink = "https://forms.gle/sbGBqjc9hizuTrNS6";

  // w-[420px] md:max-w-md lg:w-[1320px] 

  return (
    <>
    
    <div className="flex lg:flex-row flex-col max-w-8xl h-auto justify-center items-center">
      <div className="w-96 lg:w-1/2" >
          <img
          className=" w-96 lg:w-full  h-screen"
          src={lastpic} alt="" />
      </div>
      <div className="w-96 lg:w-1/2 flex items-center justify-center h-screen">
              <Tabs defaultValue="image1" 
              className=" w-full flex flex-col items-center justify-center">
              <TabsList className="lg:flex-row flex-col lg:gap-0 gap-2 lg:w-[600px] w-96 lg:h-10 h-40">
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
                  className="w-[400px] h-[550px]" 
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
    <div className="flex items-center justify-center m-5">
        <Button><a
        className="font-poppins lg:w-96 md:w-72 w-40 " 
        href={GoogleLink}>Accept the Invitation</a></Button>
    </div>
    </>
  );
}
        