

import {
    useRef, useState, useEffect
} from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  



const Timer = () => {

    const [timerDays, setTimerDays ] = useState<string>('00');
    const [timerHours, setTimerHours ] = useState<string>('00');
    const [timerMinutes, setTimerMinutes ] = useState<string>('00');
    const [timerSeconds, setTimerSeconds ] = useState<string>('00');



    const interval = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        const countdownDate : Date = new Date('January 06, 2024 02:00:00');

        interval.current = setInterval(() => {
            const now : number= new Date().getTime();

            const diff : number = countdownDate.getTime() - now;

            const days = Math.floor(diff / (1000 * 60 * 60 *24));
            const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            const newDays = days.toString();
            const newHours = hours.toString();
            const newMinutes = minutes.toString();
            const newSeconds = seconds.toString();



            if (diff < 0){
                clearInterval(interval.current as NodeJS.Timeout);
            }else{
                setTimerDays(newDays);
                setTimerHours(newHours);
                setTimerMinutes(newMinutes);
                setTimerSeconds(newSeconds)
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current as NodeJS.Timeout);
        }
    },[])
    
  return (
    <div className='w-full mx-auto'>
       <Card>
            <CardHeader className='flex flex-col items-center justify-center'>
                <CardTitle className='font-poppins'>Wedding Countdown</CardTitle>
                <CardDescription>Let us altogether be excited for this wondrous event</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-row items-center justify-around'>
                <div
                 className='flex flex-col gap-2 items-center justify-center'>
                    <p className='font-quicksand text-md lg:text-5xl'>{timerDays}</p>
                    <p className='font-quicksand text-sm'>Days</p>
                </div>
                <div
                 className='flex flex-col gap-2 items-center justify-center'>
                    <p className='font-quicksand text-md lg:text-5xl'>{timerHours}</p>
                    <p className='font-quicksand text-sm'>Hours</p>
                </div>
                <div
                 className='flex flex-col gap-2 items-center justify-center'>
                    <p className='font-quicksand text-md lg:text-5xl'>{timerMinutes}</p>
                    <p className='font-quicksand text-sm'>Minutes</p>
                </div>
                <div
                 className='flex flex-col gap-2 items-center justify-center
                 '>
                    <p className='font-quicksand text-md lg:text-5xl'>{timerSeconds}</p>
                    <p className='font-quicksand text-sm'>Seconds</p>
                </div>
            </CardContent>
            
        </Card>

    </div>
  );
}

export default Timer;
