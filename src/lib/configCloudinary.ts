import cloudinary from "cloudinary";
import { environments } from "../environments";
cloudinary.v2.config({
  cloud_name: environments.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
  api_key: environments.CLOUDINARY.CLOUDINARY_API_KEY,
  api_secret: environments.CLOUDINARY.CLOUDINARY_API_SECRET,
});
