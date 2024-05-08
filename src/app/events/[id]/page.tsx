"use client"
import { FetchData } from '@/app/utils/api';
import axios from 'axios';
import Router from 'next/router';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { PostData } from '@/app/utils/api';
import MarkdownPreview from '@uiw/react-markdown-preview';

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;
type Props = {}

const page = (props: Props) => {
    const id = useParams().id;
    const [event, setevent] = useState(null);
    useEffect(() => {
        const getdata = async () => {

            const event = await PostData({ id: id }, "/api/event/get");
            console.log(event.data)
            setevent(event.data);
        }
        getdata();
    }, []);
    return (
        <div>
            {event&&<MarkdownPreview source={event.md} style={{ padding:14 ,background:'rgba(0, 0, 0, 0)', color: 'hsl(240, 50%, 10%)'}} />}
        </div>
    )
}

export default page