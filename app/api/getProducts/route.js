import { NextResponse } from "next/server";
import { connectMongoDB } from "../../DBconfig/MongoDB";
import ProductModel from "../../DBconfig/models/addProduct";

export async function GET(request) {


  await connectMongoDB();

  const Arrdata = await ProductModel.find();

  return NextResponse.json(Arrdata);
}
