import { useEffect, useState } from "react";
import AllAppliedScholarshipDataRow from "../../../components/Dashboard/TableRows/AllAppliedScholarshipDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllAppliedScholarship = () => {
    const axiosSecure = useAxiosSecure();
 // const [appliedScholarships, setAppliedScholarships] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const { data: applications = [], isLoading, refetch } = useQuery({
    queryKey: ['all-applications'],
    queryFn: async () => {
        const { data } = await axiosSecure('/dashboard/all-applications');
        return data;
        console.log(data);
    }
    
});

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
        All Applied Scholarships
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-xs md:text-base">
              <th className="border p-2">University Name</th>
               <th className="border p-2">Degree</th> 
              <th className="border p-2">Scholarship Category</th>
              <th className="border p-2">Subject Category</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((scholarship) => (
              <AllAppliedScholarshipDataRow
                key={scholarship._id }
                scholarship={scholarship}
                onUpdateStatus={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppliedScholarship;
