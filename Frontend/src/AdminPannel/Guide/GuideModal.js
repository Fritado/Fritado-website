import React, { useState , useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  saveGuide,
  updateGuide,
} from "../../service/GuideService/GuideService";

const GuideModal = ({ onCloseModal, onGuideSave , guideToEdit }) => {
  const [guideData, setGuideData] = useState({
    guideTopic: "",
    guideCategory: "",
    guideKeywords: "",
    guideVideo: "",
    guideDescription: "",
    status: "Draft",
    guideImage: null,
  });

  useEffect(() => {
    if (guideToEdit) {
      setGuideData({
        guideTopic: guideToEdit.guideTopic || "",
        guideCategory: guideToEdit.guideCategory || "",
        guideKeywords: guideToEdit.guideKeywords.join(",") || "", // Assuming comma-separated
        guideVideo: guideToEdit.guideVideo || "",
        guideDescription: guideToEdit.guideDescription || "",
        status: guideToEdit.status || "Draft",
        guideImage: null,
      });
    }
  }, [guideToEdit]);

  const handleDescriptionChange = (value) => {
    setGuideData({ ...guideData, guideDescription: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure guideKeywords is an array if needed
    if (name === "guideKeywords") {
      setGuideData({ ...guideData, guideKeywords: value.split(",") }); // Assuming comma-separated
    } else {
      setGuideData({ ...guideData, [name]: value });
    }
  };

  // Handle file input for image upload
  const handleFileChange = (e) => {
    setGuideData({ ...guideData, guideImage: e.target.files[0] }); // Update guideImage in state
  };


  const handleSubmit = async (status) => {
    try {
      let newGuide;
      if (guideToEdit) {
        // Update existing guide
        newGuide = await updateGuide(guideToEdit._id, { ...guideData, status });
      } else {
        // Save new guide
        newGuide = await saveGuide({ ...guideData, status });
      }
      console.log("Guide sent to server:", { ...guideData, status });
      onGuideSave(newGuide);
      onCloseModal();
    } catch (error) {
      console.error("Error saving Guide:", error.message);
    }
  };

  return (
    <div className="">
      <div className="modal-container">
        <div className="">
          <button
            type="button"
            onClick={onCloseModal}
            className="close-modal-btn"
          >
            <IoMdClose size={25} style={{ color: "black" }} />
          </button>
        </div>
        <h2 className="heading my-3">{guideToEdit ? "Edit Guide" : "Add Guide"}</h2>
        <form
          className="d-flex flex-column gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Guide Topic"
            id="guidetopic"
            className="p-2"
            name="guideTopic"
            value={guideData.guideTopic}
            onChange={handleChange}
          />

          <select
            id="guidecategory"
            name="guideCategory"
            className="p-2"
            value={guideData.guideCategory}
            onChange={handleChange}
          >
            <option value="Connect">Connect</option>
            <option value="OnSite SEO">Onsite SEO</option>
            <option value="Social Media">Social Media</option>
            <option value="Email Automation">Email Automation</option>
          </select>

          <input
            placeholder="Guide Keywords (comma-separated)"
            id="guideKeywords"
            className="p-2"
            name="guideKeywords"
            value={guideData.guideKeywords}
            onChange={handleChange}
          />

          <input
            type="file"
            id="guideImage"
            name="guideImage"
            accept="image/*"
            className="p-2"
            onChange={handleFileChange} // Handle image file selection
          />

          <input
            placeholder="Paste YouTube/Video URL"
            type="text"
            id="guideVideo"
            name="guideVideo"
            className="p-2"
            value={guideData.guideVideo}
            onChange={handleChange}
          />

          <ReactQuill
            theme="snow"
            placeholder="Guide Description"
            value={guideData.guideDescription}
            onChange={handleDescriptionChange}
          />

          <div className="d-flex flex-row align-items-center gap-3 my-2">
            <span
              className="d-flex btn-tab btn-base-color cursor-pointer"
              onClick={() => handleSubmit("Draft")}
            >
              Save as Draft
            </span>
            <span
              className="d-flex btn-tab btn-base-color cursor-pointer"
              onClick={() => handleSubmit("Published")}
            >
              Save & Publish
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuideModal;
