import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../../../db";
import EventMode from "../../../../../models/Event";
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await dbConnect();
        const { id } = await req.json()
        console.log(id);
        const Event = await EventMode.findOne({ title: id });
        console.log(Event)
        const response = NextResponse.json( Event , { status: 200 });
        return response;
    } catch (error) {
        const response = NextResponse.json({ error }, { status: 400 });
        return response;
    }
}