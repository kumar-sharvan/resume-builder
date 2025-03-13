// src/App.js
import React, { useState } from "react";
import ResumePreview from "./Components/ResumePreview";
import ResumeForm from "./Components/ResumeForm";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1 className="text-center fw-bold">Resume Builder</h1>
      <div className="resume-builder-container">
        <ResumeForm onFormSubmit={handleFormSubmit} />
        {formData && <ResumePreview formData={formData} />}
      </div>
    </div>
  );
}

export default App;
