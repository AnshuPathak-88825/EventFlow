import { NextResponse, NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import jwt, { JwtPayload } from "jsonwebtoken"; // Import JwtPayload

import User from "../../../../models/User";
import { error } from "console";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const cookie = await req.cookies.get("User");
        if (!cookie) {
            return NextResponse.json("Data not available");
        }

        const jwt_secret = await process.env.JWT_SECRET;
        if (!jwt_secret) {
            throw new Error("JWT secret not found in environment variables");
        }
        console.log(cookie.value);
        if (!cookie.value) {
            throw new Error("User already logout")
        }

        const decodedToken = jwt.verify(cookie.value, jwt_secret) as JwtPayload; // Type assertion

        if (!decodedToken || typeof decodedToken !== 'object' || !('id' in decodedToken)) {
            throw new Error("Invalid JWT token or missing 'id' field");
        }

        const userId = decodedToken.id;

        const user = await User.findById(userId);
        console.log(user);

        return NextResponse.json(user);
    }
    catch (error) {
        console.error("Error:", error);
        return NextResponse.json("Error"+error);
    }
}
