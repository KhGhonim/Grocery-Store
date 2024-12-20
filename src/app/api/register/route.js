import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import UserModel from "../../../Config/models/userSchema";
import { connectMongoDB } from "../../../Config/MongoDB";

export async function POST(request) {
  const objFromFrontEnd = await request.json();

  await connectMongoDB();

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(objFromFrontEnd.password, salt);

  UserModel.create({
    email: objFromFrontEnd.email,
    password: hashedPassword,
    lastname: objFromFrontEnd.lastname,
    fristname: objFromFrontEnd.fristname,
  });

  return NextResponse.json({});
}
