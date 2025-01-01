import ProductModel from "../../../Config/models/addProduct";
import { connectMongoDB } from "../../../Config/MongoDB";
import { NextResponse } from "next/server";


export async function DELETE(request) {


  await connectMongoDB();

  const DeleteProduct = await ProductModel.findOneAndDelete({
    _id: request.nextUrl.searchParams.get("id"),
  });

  return NextResponse.json(DeleteProduct);
}
