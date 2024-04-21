import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../../../db";
import EventMode from "../../../../../models/Event";
export async function GET() {
    try {
        await dbConnect()
        const data = await EventMode.find();
        const response = NextResponse.json(data, { status: 200 });
        return response;

    } catch (error) {
        const response = NextResponse.json({ message: error }, { status: 500 });

    }
}