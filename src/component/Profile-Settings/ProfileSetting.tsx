import React, { useState } from "react";
import { Button } from "../ui/Button";

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    title: "",
    bio: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
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
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Profile Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
          />
        </div>

        {/* Profile Info Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <textarea
            name="bio"
            placeholder="Biography"
            value={formData.bio}
            onChange={handleInputChange}
            rows={4}
            className="border p-2 rounded w-full"
          />
          <Button type="submit" className="w-full md:w-auto">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
