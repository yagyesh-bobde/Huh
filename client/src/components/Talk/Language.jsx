import React, { useState } from "react";

const Language = () => {
  const languages = [
    "English",
    "French",
    "German",
    "Chinese",
    "Arabic",
    "Bulgarian",
    "Croatian",
    "Czech",
    "Dutch",
    "Finnish",
    "Greek",
    "Hebrew",
    "Hindi",
    "Hungarian",
    "Indonesian",
    "Italian",
    "Japanese",
    "Korean",
    "Malay",
    "Norwegian",
    "Polish",
    "Portuguese",
    "Romanian",
    "Russian",
    "Slovak",
    "Slovenian",
    "Spanish",
    "Tamil",
    "Swedish",
    "Thai",
    "Turkish",
    "Vietnamese",
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="border bg-[#F5F5F5] flex w-80 h-14 rounded-[11px] text-black justify-center items-center">
      <div>
        <label htmlFor="languages">Pick Your Language &nbsp; </label>
        <select id="languages" value={selectedLanguage} onChange={handleChange}>
          <option value="">Select</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Language;
