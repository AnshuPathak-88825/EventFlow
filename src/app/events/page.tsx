"use client"
import React, { useEffect, useState } from 'react'
import { FetchData } from '../utils/api'
import BentoGrid from '../component/BentoGrid'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from "lucide-react"
import EventCard from '../component/EventCard'

type Props = {}

const page = (props: Props) => {
  const { toast } = useToast();
  const [events, setEvent] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const load_data = async () => {
      try {
        const data = await FetchData("/api/event/get");
        setEvent(data);
        setloading(false);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Error in loading data"
        })
        setloading(true);
      }

    }
    load_data();
  }, []);
  return (
    <div>
      {loading && events ? (<div>      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </div>) :
        <div className=''>

          {events.map((events) => <div className='w-3/4' > <EventCard Event={events} /></div>)}
        </div>

      }


    </div>


  )
}

export default page