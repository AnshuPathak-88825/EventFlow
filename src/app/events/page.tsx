import React, { useEffect } from 'react'
import { FetchData } from '../utils/api'
import BentoGrid from '../component/BentoGrid'
type Props = {}

const page = (props: Props) => {
  useEffect(()=>{
    const load_data=async()=>{
      const data=await FetchData("/api/")
    }
  },[]);
  return (
    <div>
      <BentoGrid/>
    </div>
  )
}

export default page