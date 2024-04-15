// import { NextRequest, NextResponse } from "next/server";

// export async function DELETE(req:NextRequest,res:NextResponse)
// {
//     try{
//         req.cookies.delete("User");
//         return NextResponse.json("User logout successfully")
//     }
//     catch(error)
//     {
//         console.log("Getting error while logout");
//         return NextResponse.json("Getting error while logout");
//     }
// }
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
       const response=NextResponse.json({message:"User logout successfull"});
       response.cookies.set("User","");
       return response;
    } catch (error) {
        console.error("Error while logging out:", error);
        return NextResponse.json({ error: "Error while logging out" });
    }
}
