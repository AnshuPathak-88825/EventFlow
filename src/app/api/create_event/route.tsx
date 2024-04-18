import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../../db";
import EventMode from "../../../../models/Event";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        dbConnect();
        const data = await req.json();
        const newEvent = new EventMode(data);
        const event = await newEvent.save();
        const response = await NextResponse.json({ event }, { status: 200 });
        return response;

    } catch (error) {
        const response = await NextResponse.json({ error }, { status: 500 })
        return response;
    }

}