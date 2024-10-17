import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import BlogMenu from "../Blog/BlogMenu";
import GuideModal from "../Guide/GuideModal";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  fetchGuides,
  deleteGuide,
} from "../../service/GuideService/GuideService";

const GuideSetting = () => {
  const [showModal, setShowModal] = useState(false);
  const [guide, setGuide] = useState([]);
  const [loading, setLoading] = useState(true);
  const [guideToEdit, setGuideToEdit] = useState(null); 

  const handleCloseModal = () => {
    setShowModal(false);
    setGuideToEdit(null);
  };

  const handleEditGuide = (guide) => {
    setGuideToEdit(guide); // Set the guide to be edited
    setShowModal(true); // Open the modal
  };

  useEffect(() => {
    const getGuides = async () => {
      try {
        const guideData = await fetchGuides();

        setGuide(guideData);
      } catch (error) {
        console.error("Error fetching guide:", error);
      } finally {
        setLoading(false);
      }
    };

    getGuides();
  }, []);

  // const handleGuideSave = (newGuide) => {
  //   setGuide((prevGuide) => [newGuide, ...prevGuide]);
  // };

  const handleGuideSave = (newGuide) => {
    setGuide((prevGuide) => {
      const index = prevGuide.findIndex((g) => g._id === newGuide._id);
      if (index !== -1) {
        // Update existing guide
        const updatedGuides = [...prevGuide];
        updatedGuides[index] = newGuide; // Replace the old guide with the new one
        return updatedGuides;
      }
      // Add new guide
      return [newGuide, ...prevGuide];
    });
  };

  const handleDeleteGuide = async (guideId) => {
    try {
      await deleteGuide(guideId);
      setGuide((prevGuide) => prevGuide.filter((g) => g._id !== guideId));
    } catch (error) {
      console.error("Error deleting guide:", error);
    }
  };
  return (
    <div className="">
      <div className="d-sm-flex d-flex flex-row heading-container">
        <h1 className="">Guide management</h1>
      </div>
      <BlogMenu />
      <div className="table-container">
        <div className="add-blog-btn">
          <span
           className="d-flex btn-tab btn-base-color cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <span className="postion-relative bottom-8">
              <IoIosAdd size={30} />
            </span>
            Guide
          </span>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div>
              <GuideModal
                onCloseModal={handleCloseModal}
                onGuideSave={handleGuideSave}
                guideToEdit={guideToEdit}
              />
            </div>
          </div>
        )}
        {loading ? (
          <div>Loading blogs...</div>
        ) : (
          <table className="table table-striped table-responsive">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Guide Topic</th>
                <th>Date</th>
                <th>Published By</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-capitalize">
              {guide.length > 0 ? (
                guide.map((guide, index) => (
                  <tr key={guide._id}>
                    <td>{index + 1}</td> {/* Priority based on index */}
                    <td>{guide.guideTopic || "No Title"}</td>
                    <td>{new Date(guide.createdAt).toLocaleDateString()}</td>
                    <td>{guide.publishedBy || "Unknown"}</td>
                    <td>{guide.status}</td>
                    <td>
                    <div className="d-flex flex-row gap-2">
                      <button onClick={() => handleEditGuide(guide)}>
                        <MdEdit />
                      </button>
                      <button onClick={() => handleDeleteGuide(guide._id)}>
                        <MdDelete />
                      </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Guide available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GuideSetting;
