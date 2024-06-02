import { NextResponse } from "next/server";
import { connectMongoDB } from "../../DBconfig/MongoDB";
import { uploadStream } from "../../providers/CloudinaryUploader";
import ProductModel from "../../DBconfig/models/addProduct";

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
