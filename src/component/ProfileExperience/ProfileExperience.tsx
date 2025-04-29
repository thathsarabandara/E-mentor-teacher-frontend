'use client'
import React, { useState } from "react";

interface Experience {
  id: number;
  institution: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ProfileExperience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [formData, setFormData] = useState<Omit<Experience, "id">>({
    institution: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add or Update Experience
  const handleSave = () => {
    if (editingId !== null) {
      // Update existing experience
      setExperiences((prev) =>
        prev.map((exp) =>
          exp.id === editingId ? { ...exp, ...formData } : exp
        )
      );
      setEditingId(null);
    } else {
      // Add new experience
      const newExperience: Experience = {
        id: Date.now(),
        ...formData,
      };
      setExperiences((prev) => [...prev, newExperience]);
    }
    // Clear form
    setFormData({
      institution: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  // Load experience data into form for editing
  const handleEdit = (exp: Experience) => {
    setFormData({
      institution: exp.institution,
      role: exp.role,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description,
    });
    setEditingId(exp.id);
  };

  return (
    <div className="flex w-full gap-8 mt-4">
      {/* Experience List */}
      <div className="w-1/2 p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold mb-4">Current Experiences</h2>
        {experiences.length === 0 ? (
          <p className="text-gray-500">No experiences added yet.</p>
        ) : (
          experiences.map((exp) => (
            <div
              key={exp.id}
              className="mb-4 border-b pb-3 flex justify-between items-start"
            >
              <div>
                <p className="font-bold">{exp.institution}</p>
                <p>{exp.role}</p>
                <p className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
              <button
                onClick={() => handleEdit(exp)}
                className="text-blue-600 hover:underline text-sm"
              >
                Edit
              </button>
            </div>
          ))
        )}
      </div>

      {/* Experience Form */}
      <div className="w-1/2 p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Update Experience" : "Add New Experience"}
        </h2>

        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={formData.institution}
          onChange={handleChange}
          className="border border-gray-400 p-2 mb-2 w-full rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          className="border border-gray-400 p-2 mb-2 w-full rounded"
        />
        <div className="flex gap-2 mb-2">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-1/2 rounded"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-1/2 rounded"
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="border border-gray-400 p-2 mb-2 w-full rounded"
        />
        <button
          onClick={handleSave}
          className="bg-orange-500 border border-orange-500 text-white px-4 py-2 rounded hover:bg-white hover:text-orange-500"
        >
          {editingId ? "Update Experience" : "Add Experience"}
        </button>
      </div>
    </div>
  );
};

export default ProfileExperience;
