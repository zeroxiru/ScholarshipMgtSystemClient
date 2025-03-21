import { useState } from "react";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const AllAppliedScholarshipDataRow = ({ scholarship, onUpdateStatus }) => {
  const { universityName,scholarshipCategory, subjectCategory, date, status,id } = scholarship;
 const [isDetailsOpen, setIsDetailOpen] = useState(false);
 const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
 const [feedback, setFeedback] = useState("");
 const handleFeedbackSubmit = () =>{ 
    if (!feedback) return;
    onUpdateStatus(id, {feedback, status})

    Swal.fire("Feedback Submitted", "Your feedback has been saved.", "success");
    setIsFeedbackOpen(false);
    
 }
 
   // Handle cancel application
   const handleCancelApplication = async() => {
  try {
  const response = await axiosSecure.patch( `${import.meta.env.VITE_API_URL}/dashboard/update-status/${scholarship._id}`,
    { status: "Rejected" }
  )
    if (response.status === 200 ){
        
  
    Swal.fire("Application Canceled", "The application has been rejected.", "error");
    onUpdateStatus(scholarship._id, { status: "Rejected" });
}
else{
    Swal.fire("Error", "Failed to update application status.", "error");
  }
  } catch (error) {
    console.error("Error updating application:", error);
    Swal.fire("Error", "Something went wrong.", "error");
  }
  };

// const handleCancelApplication = async () => {
//     try {
//       const response = await axiosSecure.patch(
//         `${import.meta.env.VITE_API_URL}/dashboard/update-status/${scholarship._id}`,
//         { status: "Rejected" }
//       );
  
//       console.log("API Response:", response.data); // ✅ Log response data
  
//       if (response.data.success) {
//         Swal.fire("Success", "Application status updated successfully!", "success");
//         refetch(); // Refresh data
//       } else {
//         Swal.fire("Failed", "Failed to update application status", "error");
//       }
//     } catch (error) {
//       console.error("Error updating application:", error);
//       Swal.fire("Error", "Something went wrong!", "error");
//     }
//   };
  return (
    <tr className="border text-xs md:text-base">
      <td className="border p-2">{universityName}</td>
      <td className="border p-2">{scholarshipCategory}</td>
      <td className="border p-2">{subjectCategory}</td>
      <td className="border p-2">{date}</td>
      <td className="border p-2">{status}</td>
      <td className="border p-2 flex flex-col md:flex-row gap-2 justify-center">
        <button
          className="bg-blue-500 text-white px-2 py-1 md:px-3 md:py-1 rounded"
          onClick={() => setIsDetailOpen(true)}
        >
         Details
        </button>
        <button
          className="bg-yellow-500 text-white px-2 py-1 md:px-3 md:py-1 rounded"
          onClick={() => setIsFeedbackOpen(true)}
        >
         Feedback
        </button>
        <button className="bg-red-500 text-white px-2 py-1 md:px-3 md:py-1 rounded"
        onClick={handleCancelApplication}>
          Cancel
        </button>
      </td>
        {/* Details Modal */}
        {isDetailsOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-5 rounded shadow-lg w-11/12 md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Application Details</h3>
            <p><strong>University:</strong> {universityName}</p>
            <p><strong>Degree:</strong> {degree}</p>
            <p><strong>Scholarship Category:</strong> {scholarshipCategory}</p>
            <button
              className="mt-3 bg-gray-500 text-white px-3 py-1 rounded w-full"
              onClick={() => setIsDetailsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-5 rounded shadow-lg w-11/12 md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Provide Feedback</h3>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Enter your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-3">
              <button
                className="bg-gray-500 text-white px-3 py-1 rounded"
                onClick={() => setIsFeedbackOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={handleFeedbackSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};

export default AllAppliedScholarshipDataRow;
