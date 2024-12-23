import { uploadStream } from "Providers/CloudinaryUploader";
import ProductModel from "../../../Config/models/addProduct";
import { connectMongoDB } from "../../../Config/MongoDB";
import { NextResponse } from "next/server";


export async function POST(request) {
  const dataFromFrontend = await request.formData();
  const name = dataFromFrontend.get("name");
  const price = dataFromFrontend.get("price");
  const Fakeprice = dataFromFrontend.get("Fakeprice");
  const category = dataFromFrontend.get("category");
  const rating = dataFromFrontend.get("rating");
  const discount = dataFromFrontend.get("discount");
  const description = dataFromFrontend.get("description");
  const stock = dataFromFrontend.get("stock");
  const type = dataFromFrontend.get("type");
  const additionalImages = dataFromFrontend.getAll("additionalImages");
  let image = dataFromFrontend.get("image");

  if (!name || !price || !Fakeprice || !category || !rating || !discount || !description || !stock || !type) {
    return NextResponse.json(
      { message: "Make sure you've added all the required fields" },
      { status: 400 }
    );

  }

  if (!additionalImages || !image) {
    return NextResponse.json(
      { message: "Make sure you've added upload one image for the main and one for the additional images" },
      { status: 400 }
    );
  }


  try {
    // Upload the main image
    const mainImageBuffer = Buffer.from(await image.arrayBuffer());
    const uploadedMainImage = await uploadStream(mainImageBuffer, "GroceryStore");
    image = uploadedMainImage.url;

    // Upload additional images in parallel
    const additionalImagesUrls = await Promise.all(
      additionalImages.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadedImage = await uploadStream(buffer, "GroceryStore");
        return uploadedImage.url;
      })
    );

    // Connect to MongoDB
    await connectMongoDB();

    // Save product data to the database
    await ProductModel.create({
      image,
      images: additionalImagesUrls,
      name,
      price,
      Fakeprice,
      category,
      rating,
      discount,
      description,
      stock,
      type,
    });

    return NextResponse.json({ message: "Product added successfully" });
  } catch (err) {
    console.error("Error uploading images:", err);
    return NextResponse.json(
      { error: "Failed to upload images or save product" },
      { status: 500 }
    );
  }
}
