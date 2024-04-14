import { NextResponse, NextRequest } from "next/server";
import dbconnect from "../../../../db"
import User from "../../../../models/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await dbconnect();
        const { email, name, username, password } = await req.json();
        const existingUser = await User.findOne({ email });
        const jwtsecret = await process.env.JWT_TOKEN || "hafsdasfasfasdfsdafasdf";
        if (existingUser) {
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, jwtsecret, { expiresIn: "1y" });
            const response = NextResponse.json(existingUser);
            return response

        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, username, password: hashedpassword, name });


        const token = jwt.sign({ email: newUser.email, id: newUser._id }, jwtsecret, { expiresIn: "1y" });
        await newUser.save()


        const response = NextResponse.json(newUser);
        response.cookies.set('User', token);
        return response;
    }
    catch (error) {
        console.log("Error while register user data");
        return NextResponse.json("Errorwhile posting data");
    }

}