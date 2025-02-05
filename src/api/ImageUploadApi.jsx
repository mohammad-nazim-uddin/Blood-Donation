import axios from "axios";

export const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Cloudinary preset
    formData.append("folder", "blood-donation-profiles"); // Optional: Specify folder

    // Cloudinary API endpoint
    const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
    );

    return data;
};