const cloudinary = require("cloudinary").v2

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;
  
  if (
    !CLOUD_NAME || CLOUD_NAME.includes('your_') ||
    !API_KEY || API_KEY.includes('your_') ||
    !API_SECRET || API_SECRET.includes('your_')
  ) {
    console.warn("Cloudinary credentials missing or invalid. Using placeholder image.");
    return { secure_url: "https://placehold.co/600x400" };
  }

  const options = { folder }
  if (height) {
    options.height = height
  }
  if (quality) {
    options.quality = quality
  }
  options.resource_type = "auto"
  console.log(options, "OPTIONS" )
  return await cloudinary.uploader.upload(file.tempFilePath, options)
}
