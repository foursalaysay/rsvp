"use client"


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"



const FormSchema = z.object({
  representative: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  numberOfAttendees: z.string().regex(/^\d+$/, {
    message: "Number of attendees must be a positive integer.",
  }),
})

export default function Fillform() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      representative: "",
      numberOfAttendees:""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Dialog>
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className=" mt-5 font-playpen italic lg:text-lg text-sm ">
          "Join us in celebrating a day filled with love, laughter, 
          and cherished moments! Your presence would add an extra <br />
          sparkle to our joyous occasion. Your company means the world to us,
            and we'd be absolutely thrilled to share this <br />
            special day with you. 
            Your warmth and friendship would make our wedding complete.
              We can't wait to create <br />
              beautiful memories together 
              on this unforgettable
              day—your presence will truly make it even more magical!"
          </p>
          <DialogTrigger asChild>
            <Button
            className="font-poppins w-56">Accept Invitation</Button>
          </DialogTrigger>
      </div>

    <DialogContent className="sm:max-w-[425px] w-96">
      <DialogHeader>
        <DialogTitle className="font-poppins">Enter Number of Attendees:</DialogTitle>
        <DialogDescription>
          You are cordially invited!
        </DialogDescription>
      </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 lg:space-y-6">
        <FormField
        control={form.control}
          name="representative"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-poppins">Representative Name</FormLabel>
              <FormControl>
                <Input
                className="w-96"
                placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfAttendees"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-poppins">Number of Attendees</FormLabel>
              <FormControl>
                <Input
                className="w-96"
                 placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
    )}
  />
        <DialogFooter>
          <Button className="font-poppins w-96 ml-20" type="submit">Submit</Button>
        </DialogFooter>
      </form>
    </Form>
  </DialogContent>
  </Dialog>
  )
}






