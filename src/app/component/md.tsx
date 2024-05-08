"use client"
import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
const mdStr = `
# Awesome Tech Event

Welcome to the Awesome Tech Event! 🎉

## Event Details
- **Date:** [Insert Date]
- **Time:** [Insert Time]
- **Location:** [Insert Location]
- **Organizer:** [Insert Organizer Name]
- **Theme:** Exploring Emerging Technologies

## About the Event
This tech event aims to bring together professionals, enthusiasts, and beginners from the tech industry to share knowledge, network, and explore new technologies. Whether you're a seasoned developer, a tech entrepreneur, or just curious about the latest innovations, there's something for everyone at our event!

Our event will feature insightful talks, engaging panel discussions, hands-on workshops, and opportunities to connect with like-minded individuals in the tech community. Join us for a day filled with learning, inspiration, and collaboration.

## Who Should Attend
- Developers
- Designers
- Entrepreneurs
- Students
- Tech Enthusiasts
- Anyone interested in technology and innovation!

## Agenda
- **9:00 AM - 9:30 AM:** Registration and Networking
- **9:30 AM - 10:30 AM:** Keynote Address by [Keynote Speaker]
- **10:30 AM - 11:30 AM:** Panel Discussion: "Future Trends in Tech"
- **11:30 AM - 12:30 PM:** Breakout Sessions:
  - *Track 1:* "Artificial Intelligence and Machine Learning"
  - *Track 2:* "Blockchain and Cryptocurrency"
- **12:30 PM - 1:30 PM:** Lunch Break
- **1:30 PM - 3:00 PM:** Workshops:
  - *Workshop 1:* "Introduction to Web Development"
  - *Workshop 2:* "Building Scalable Applications on Cloud Platforms"
- **3:00 PM - 3:30 PM:** Coffee Break
- **3:30 PM - 4:30 PM:** Lightning Talks
- **4:30 PM - 5:00 PM:** Closing Remarks and Networking

## Registration
To attend the Awesome Tech Event, please register [here](#).

## Contact Us
If you have any questions or inquiries about the event, feel free to contact us at [email@example.com](mailto:email@example.com) or visit our website [www.awesometechevent.com](http://www.awesometechevent.com).

We look forward to seeing you at the event! 🚀

`;
import MDEditor from '@uiw/react-md-editor';

const Md = ({value,setvalue}) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <MarkdownEditor
          value={mdStr}
          onChange={(value, viewUpdate) => {
            setvalue(value)
          }}
          style={{ padding:14 ,background:'rgba(0, 0, 0, 0)', color: 'hsl(240, 50%, 10%)'}} 
          enablePreview={false}

        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="container">
          <MDEditor.Markdown source={value} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>


  )
};

export default Md;