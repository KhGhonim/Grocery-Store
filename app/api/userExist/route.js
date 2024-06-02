import { NextResponse } from "next/server";
import { connectMongoDB } from "../../DBconfig/MongoDB";
import UserModel from "../../DBconfig/models/userSchema";

export async function POST(request) {
  const objFromFrontEnd = await request.json();


  await connectMongoDB();

  const user = await UserModel.findOne({
    email: objFromFrontEnd.email,
  });


  return NextResponse.json({ user });
}
