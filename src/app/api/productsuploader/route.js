import { uploadStream } from "Providers/CloudinaryUploader";
import ProductModel from "../../../Config/models/addProduct";
import { connectMongoDB } from "../../../Config/MongoDB";
import { NextResponse } from "next/server";


export async function POST(request) {
  const dataFromFrontend = await request.formData();
  const image = dataFromFrontend.get("image");
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadedImg = await uploadStream(buffer);
  const imgURL = uploadedImg.url;

  await connectMongoDB();

  ProductModel.create({
    image: imgURL,
    name: dataFromFrontend.get("name"),
    price: dataFromFrontend.get("price"),
    Fakeprice: dataFromFrontend.get("Fakeprice"),
    catagory: dataFromFrontend.get("catagory"),
  });

  return NextResponse.json({});
}
