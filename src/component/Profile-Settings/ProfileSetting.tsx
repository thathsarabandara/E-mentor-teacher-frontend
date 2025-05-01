'use client'
import React, { useState } from "react";
import { Button } from "../ui/Button";
import emptyImage from '../../../public/assets/images/emptyProfile.png'
import Image from "next/image";

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateofbirth: "",
    email: "",
    phoneNumber: "",
    proffesion: "",
    address: "",
    bio: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Validate file type
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
      } else {
        alert("Invalid file type. Please upload an image.");
      }
    }
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle saving changes logic here
    console.log(formData);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded">
      <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
      <div className="flex justify-center items-start w-full">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center w-4/12">
            <div className="flex flex-col justify-center items-center w-10/12 h-[400px] overflow-hidden border-4 border-gray-300 mb-4">
                {profileImage ? (
                <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                ) : (
                <Image
                    src={emptyImage}
                    alt="Default Profile"
                    className="object-cover w-9/12 h-10/12"
                />
                )}

                {/* Custom upload button */}
                <label
                htmlFor="profileImageUpload"
                className="text-center cursor-pointer mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 w-full"
                >
                Upload Image
                </label>

                {/* Hidden input */}
                <input
                id="profileImageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                />
            </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-8/12">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-full mb-4 border-gray-400">
                <div className="w-1/2 mr-4">
                    <label htmlFor="firstname" className="text-sm">First Name</label>
                    <input
                    id="firstname"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full border-gray-400"
                    />
                </div>
                <div className="w-1/2">
                    <label htmlFor="lastname" className="text-sm">Last Name</label>
                    <input
                        id="lastname"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full border-gray-400"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center w-full mb-4">
                <div className="w-1/2 mr-4">
                    <label htmlFor="dateofbirth" className="text-sm">Date Of Birth</label>
                    <input
                        id="dateofbirth"
                        type="date"
                        name="dateofbirth"
                        value={formData.dateofbirth}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full border-gray-400"
                    />
                </div>
                <div className="w-1/2">
                    <label htmlFor="phonenumber" className="text-sm">Phone Number</label>
                    <input
                        id="phonenumber"
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full border-gray-400"
                    />
                </div>
            </div>
            <div className="w-full mb-4">
                <label htmlFor="email" className="text-sm">Email</label>
                <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border p-2 rounded w-full border-gray-400"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="proffesion" className="text-sm">Proffesion</label>
                <input
                id="proffesion"
                type="text"
                name="proffesion"
                placeholder="Proffesion"
                value={formData.proffesion}
                onChange={handleInputChange}
                className="border p-2 rounded w-full border-gray-400"
                />
            </div>
          </div>
          <div className="w-full mb-4">
                <label htmlFor="bio" className="text-sm">Biography</label>
                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Biography"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="border p-2 rounded w-full border-gray-400"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="address" className="text-sm">Address</label>
                <textarea
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={4}
                    className="border p-2 rounded w-full border-gray-400"
                />
            </div>
          <Button type="submit" className="w-full md:w-auto">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
