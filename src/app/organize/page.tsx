"use client"
import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import CalendarForm from '../component/Calender'
import { Button } from '@/components/ui/button'
import Md from '../component/md'
import { FetchData, PostData } from '../utils/api'
type Props = {}
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import Page from "../test/page"
import { ToastAction } from '@radix-ui/react-toast'
const page = (props: Props) => {
  const { toast } = useToast();
  const router = useRouter()
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [mdvalue, setMdvalue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Venue, setVenue] = useState("")
  const [user, setUserData] = useState(null);
  console.log(mdvalue);
  useEffect(() => {

    const getuserData = async () => {
      try {
        const response = await FetchData("/api/me");
        setUserData(response);
        toast({
          description: "Your user account has been successfully created.",
        })
      } catch (error: Error) {
        if (!user) {
          console.log(user);
          router.push('/');
        }
      
        setUserData(null)
      }
    }
    getuserData();

  },[router] )
  const handleSubmit = async () => {
    if (user && (user as any)._id) {
      try {
        const userid: any = user._id;
        const Eventdata = { title, time: date, md: mdvalue, description, venue: Venue, admin: userid };
        const response = await PostData(Eventdata, "/api/event/create")
      } catch (error) {
        console.log(error)
      }


    }
  };

  return (
    <>
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5 m-4">
          <Label htmlFor="title">Title</Label>
          <Input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 m-4">
          <Label >Description</Label>
          <Input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        </div><div className="grid w-full max-w-sm items-center gap-1.5 m-4">

          <CalendarForm setDate={setDate} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 m-4">
          <Label >Venu</Label>
          <Input type="text" placeholder="Venue" onChange={(e) => setVenue(e.target.value)} />
        </div>


        <Md value={mdvalue} setvalue={setMdvalue} />
        <div>

        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 m-4">
          <Button type="submit" onClick={handleSubmit}>Create Event</Button>
        </div>
      </div>

    </>

  )
}

export default page