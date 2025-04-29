"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Button } from "../ui/Button";

type SocialProfile = {
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
  youtube: string;
};

export const SocialProfileForm = () => {
  const [formData, setFormData] = useState<SocialProfile>({
    website: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    whatsapp: "",
    youtube: "",
  });

  // Fetch existing social profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/social-profile");
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error("Failed to fetch social profile data", err);
      }
    };

    fetchProfile();
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit updated profile
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/social-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save profile");

      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating profile");
    }
  };

  return (
    <div className="mt-4 mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Social Profile</h2>

      {/* Personal Website */}
      <div className="">
        <label htmlFor="website" className="">Personal Website</label>
        <div className="mb-4 flex items-center border rounded px-3 py-2 border-gray-400">
            <FiGlobe className="text-orange-500 mr-3" />
            <input
            id="website"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Personal website or portfolio url..."
            className="w-full focus:outline-none"
            />
        </div>
      </div>

      {/* Social media fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: <FaFacebookF />, name: "facebook", placeholder: "Username", label: "Facebook" },
          { icon: <FaInstagram />, name: "instagram", placeholder: "Username", label: "Intergram" },
          { icon: <FaLinkedinIn />, name: "linkedin", placeholder: "Username", label: "LinkedIn" },
          { icon: <FaTwitter />, name: "twitter", placeholder: "Username", label: "Twitter" },
          { icon: <FaWhatsapp />, name: "whatsapp", placeholder: "Phone number", label: "Whatsapp" },
          { icon: <FaYoutube />, name: "youtube", placeholder: "Username", label: "Youtube" },
        ].map((field) => (
          <div className="mb-4">
            <div key={field.name} className="flex flex-col w-full">
                <label htmlFor={field.name} className="text-sm">{field.label}</label>
                <div className="flex items-center border rounded px-3 py-2 border-gray-400">
                    <div className="text-orange-500 mr-3">{field.icon}</div>
                    <input
                    id={field.name}
                    type="text"
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full focus:outline-none"
                    />
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Save Changes button */}
      <Button type="submit" className="w-full md:w-auto mt-4">Save Changes</Button>
    </div>
  );
};

