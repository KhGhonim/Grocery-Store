import ProductModel from "../../../Config/models/addProduct";
import { connectMongoDB } from "../../../Config/MongoDB";
import { NextResponse } from "next/server";


export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  const name = request.nextUrl.searchParams.get("name");
  const description = request.nextUrl.searchParams.get("description");
  const price = request.nextUrl.searchParams.get("price");

  await connectMongoDB();


  const Arrdata = await ProductModel.findOneAndUpdate({
    _id: id
  }, {
    name,
    description,
    price
  });


  return NextResponse.json({ Arrdata });
}
