'use client'
import React, { useState } from "react";
import { Button } from "../ui/Button";

const PasswordChangeSection = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      alert("New password and confirmation do not match.");
      return;
    }

    // TODO: call API here
    console.log("Updating password...", form);
    alert("Password updated successfully!");
  };

  return (
    <div className="w-full mt-8 p-6 rounded-lg shadow bg-white">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Change Password</h2>
      <form onSubmit={handlePasswordChange} className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block text-gray-600 mb-1">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="newPassword" className="block text-gray-600 mb-1">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-gray-600 mb-1">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <Button type="submit" className="w-full md:w-auto">Save Changes</Button>
      </form>
    </div>
  );
};

export default PasswordChangeSection;
