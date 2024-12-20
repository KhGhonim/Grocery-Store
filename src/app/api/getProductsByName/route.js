import ProductModel from "../../../Config/models/addProduct";
import { connectMongoDB } from "../../../Config/MongoDB";
import { NextResponse } from "next/server";


export async function GET(request) {

  await connectMongoDB();



  const Arrdata = await ProductModel.find({
    
   });


  return NextResponse.json(Arrdata);
}
