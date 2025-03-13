import React, { useState } from "react";
import ResumePreview from "./ResumePreview"; // Import the ResumePreview component

const ResumeForm = ({ onFormSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // State to control preview visibility
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    gender: "",
    dob: "",
    address: "",
    pinCode: "",
    phone: "",
    email: "",
    qualification: ["10th passed from CBSE in (2021)"],
    skills: "",
    experience: "",
    nationality: "Indian",
    language: "",
    maritalStatus: "",
  });

  const toggleForm = () => setShowForm(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true); // Show the preview when the form is submitted
    onFormSubmit(formData); // Pass form data to the parent component
  };

  // Add Qualification Row
  const addQualification = () => {
    setFormData({
      ...formData,
      qualification: [...formData.qualification, ""],
    });
  };

  // Remove Qualification Row
  const removeQualification = (index) => {
    const newQualifications = formData.qualification.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, qualification: newQualifications });
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      name: "",
      fatherName: "",
      gender: "",
      dob: "",
      address: "",
      pinCode: "",
      phone: "",
      email: "",
      qualification: ["10th passed from CBSE in (2021)"],
      skills: "",
      experience: "",
      nationality: "Indian",
      language: "",
      maritalStatus: "",
    });
    setShowPreview(false); // Hide the preview when the form is reset
  };

  return (
    <div className="container">
      <div className="mt-3 text-center">
        <button className="btn btn-primary" onClick={toggleForm}>
          Create Resume
        </button>
      </div>

      {showForm && (
        <div className="row mt-4 p-3 border shadow-sm rounded bg-light">
          <h2 className="text-center fw-bold">Enter Your Details</h2>

          {/* Left Section */}
          <div className="col-6">
            <label className="fw-bold">Heading:</label>
            <input
              type="text"
              className="form-control mb-2"
              value="Resume"
              readOnly
            />

            <label className="fw-bold">Full Name:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Father's Name:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Gender:</label>
            <select
              className="form-select mb-2"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="fw-bold">Date of Birth:</label>
            <input
              type="date"
              className="form-control mb-2"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Address:</label>
            <textarea
              className="form-control mb-2"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>

            <label className="fw-bold">Pin Code:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Phone Number:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Email:</label>
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Right Section */}
          <div className="col-6">
            <label className="fw-bold">Academic Qualification:</label>
            {formData.qualification.map((qual, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={qual}
                  placeholder="12th passed from CBSE(2021)"
                  onChange={(e) => {
                    const newQualifications = [...formData.qualification];
                    newQualifications[index] = e.target.value;
                    setFormData({
                      ...formData,
                      qualification: newQualifications,
                    });
                  }}
                />
                {index > 0 && (
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => removeQualification(index)}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addQualification}
              className="btn btn-primary btn-sm"
            >
              + Add Row
            </button>
            <br />

            <label className="fw-bold mt-2">Skills:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Work Experience:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />

            <label className="fw-bold">Nationality:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Language Known:</label>
            <input
              type="text"
              className="form-control mb-2"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            />

            <label className="fw-bold">Marital Status:</label>
            <select
              className="form-select mb-2"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>

            <hr />
            <button className="btn btn-success w-100" onClick={handleSubmit}>
              Preview Resume
            </button>
            <button
              className="btn btn-secondary w-100 mt-2"
              onClick={resetForm}
            >
              Reset Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
