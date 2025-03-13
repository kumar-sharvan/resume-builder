import React from "react";
import jsPDF from "jspdf";

const ResumePreview = ({ formData }) => {
  const handleDownload = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set initial y-position for content
    let yPos = 10;

    // Set font size and type for the title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(`${formData.name}`, 10, yPos);
    yPos += 10;

    // Add Father's Name
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Father's Name: ${formData.fatherName}`, 10, yPos);
    yPos += 10;

    // Add Email
    doc.text(`Email: ${formData.email}`, 10, yPos);
    yPos += 10;

    // Add Phone
    doc.text(`Phone: ${formData.phone}`, 10, yPos);
    yPos += 10;

    // Add Gender
    doc.text(`Gender: ${formData.gender}`, 10, yPos);
    yPos += 10;

    // Add Date of Birth
    doc.text(`Date of Birth: ${formData.dob}`, 10, yPos);
    yPos += 10;

    // Add Address
    doc.text(`Address: ${formData.address}`, 10, yPos);
    yPos += 10;

    // Add PinCode
    doc.text(`PinCode: ${formData.pinCode}`, 10, yPos);
    yPos += 10;

    // Add Nationality
    doc.text(`Nationality: ${formData.nationality}`, 10, yPos);
    yPos += 10;

    // Add Language Known
    doc.text(`Language Known: ${formData.language}`, 10, yPos);
    yPos += 10;

    // Add Marital Status
    doc.text(`Marital Status: ${formData.maritalStatus}`, 10, yPos);
    yPos += 15;

    // Add Education Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Education:", 10, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    formData.qualification.forEach((qual, index) => {
      doc.text(`- ${qual}`, 15, yPos);
      yPos += 10;
    });

    // Add Experience Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Experience:", 10, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(formData.experience, 15, yPos);
    yPos += 20;

    // Add Skills Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Skills:", 10, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(formData.skills, 15, yPos);

    // Save the PDF
    doc.save(`${formData.name}_Resume.pdf`);
  };

  return (
    <div className="container mt-4 p-4 border rounded bg-light">
      <h2 className="text-center">Resume</h2>
      <hr />
      <h4>{formData.name}</h4>
      <p>
        <strong>Father's Name:</strong> {formData.fatherName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}
      </p>
      <h5>Education</h5>
      <ul>
        {formData.qualification.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
      <h5>Experience</h5>
      <p>{formData.experience}</p>
      <h5>Skills</h5>
      <p>{formData.skills}</p>
      <h5>Gender</h5>
      <p>{formData.gender}</p>
      <h5>Date of Birth</h5>
      <p>{formData.dob}</p>
      <h5>Address</h5>
      <p>{formData.address}</p>
      <h5>PinCode</h5>
      <p>{formData.pinCode}</p>
      <h5>Nationality</h5>
      <p>{formData.nationality}</p>
      <h5>Language Known</h5>
      <p>{formData.language}</p>
      <h5>Marital Status</h5>
      <p>{formData.maritalStatus}</p>

      <button className="btn btn-success" onClick={handleDownload}>
        Download Resume
      </button>
    </div>
  );
};

export default ResumePreview;
