import dbConnect from "../../../../db";
import { NextResponse, NextRequest } from "next/server";
import User from "../../../../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
    try {
        await dbConnect();
        const { email, password, username } = await req.json();
        const jwt_secret = await process.env.JWT_SECRET;
        if (!jwt_secret) {
            throw new Error("JWT secret not found in environment variables")
        }
        let existingUser;
        if (username) {
            existingUser = await User.findOne({ username });
        } else if (email) {
            existingUser = await User.findOne({ email });
        }

        if (!existingUser) {
            return NextResponse.json("User not found");
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return NextResponse.json("Incorrect password");
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, jwt_secret, { expiresIn: "1y" });
        const response = NextResponse.json(existingUser);
        response.cookies.set("User", token);
        return response;


    } catch (error) {
        console.error("Error while logging in:", error);
        return NextResponse.json("Unable to login user");
    }
}