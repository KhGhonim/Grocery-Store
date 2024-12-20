import UserModel from "../../../Config/models/userSchema";
import { connectMongoDB } from "../../../Config/MongoDB";
import { NextResponse } from "next/server";


export async function POST(request) {
  const objFromFrontEnd = await request.json();


  await connectMongoDB();

  const user = await UserModel.findOne({
    email: objFromFrontEnd.email,
  });


  return NextResponse.json({ user });
}
