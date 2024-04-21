import { NextResponse,NextRequest } from "next/server";
import dbConnect from "../../../../../db";
import EventMode from "../../../../../models/Event";
export async function GET()
{
    try {
        await dbConnect()
        const response=
    } catch (error) {
        
    }
}