const { Readable } = require("stream");
const cloudinary = require("cloudinary").v2;
 
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.api_secret,
});
 
const options = {
  stream: true,
};
 
export async function uploadStream(buffer) {
  return new Promise((res, rej) => {
    const theTransformStream = cloudinary.uploader.upload_stream(
      options,
      (err, result) => {
        if (err) return rej(err);
        res(result);
      }
    );
    let str = Readable.from(buffer);
    str.pipe(theTransformStream);
  });
}