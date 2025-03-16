import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const ApplicationForm = () => {
    const { state } = useLocation();
    const { user } = useAuth(); // Get authenticated user data
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        phoneNumber: '',
        photo: '',
        address: { village: '', district: '', country: '' },
        gender: '',
        applyingDegree: '',
        sscResult: '',
        hscResult: '',
        studyGap: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [key, subkey] = name.split('.');
            setFormData((prev) => ({
                ...prev,
                [key]: { ...prev[key], [subkey]: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Save Applicant Data
            const applicantData = {
                phoneNumber: formData.phoneNumber,
                photo: formData.photo,
                address: formData.address,
                gender: formData.gender,
                applyingDegree: formData.applyingDegree,
                sscResult: formData.sscResult,
                hscResult: formData.hscResult,
                studyGap: formData.studyGap || null,
            };

            const applicantResponse = await axios.post(
                `${import.meta.env.VITE_API_URL}/dashboard/applicants`,
                applicantData
            );

            // Prepare Apply Scholarship Data
            const applyScholarshipData = {
                userName: user?.displayName,
                userEmail: user?.email,
                userId: user?.id,
                scholarshipId: state.scholarshipId,
                universityName: state.universityName,
                scholarshipCategory: state.scholarshipCategory,
                subjectCategory: state.subjectName,
                applicantId: applicantResponse.data.id, // ID returned from ApplicantCollection
                date: new Date().toISOString(),
            };

            // Save Apply Scholarship Data
            await axios.post(`${import.meta.env.VITE_API_URL}/dashboard/apply-scholarships`, applyScholarshipData);

            toast.success('Application submitted successfully!');
            navigate('/dashboard/my-applications/:email');
        } catch (error) {
            console.error('Application submission failed:', error);
            toast.error('Failed to submit application. Please try again.');
        }
    };


    return (
        <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Apply for Scholarship</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Read-Only Fields */}
                    <div>
                        <label className="block font-semibold">University Name</label>
                        <input
                            type="text"
                            value={state.universityName}
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Scholarship Category</label>
                        <select
                            value={state.scholarshipCategory}
                            readOnly
                            className="select select-bordered w-full bg-gray-100 cursor-not-allowed"
                        >
                            <option value={state.scholarshipCategory}>
                                {state.scholarshipCategory}
                            </option>
                        </select>

                    </div>
                    <div>
                        <label className="block font-semibold">Subject Category</label>
                        <select
                            value={state.subjectCategory}
                            readOnly
                            className="select select-bordered w-full bg-gray-100 cursor-not-allowed">
                                <option value={state.subjectCategory}>
                                {state.subjectCategory}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold">Subject Name</label>
                        <input
                            type="text"
                            value={state.subjectName}
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>

                    {/* Applicant Fields */}
                    <div>
                        <label className="block font-semibold">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Applicant Photo (URL)</label>
                        <input
                            type="text"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Village</label>
                        <input
                            type="text"
                            name="address.village"
                            value={formData.address.village}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">District</label>
                        <input
                            type="text"
                            name="address.district"
                            value={formData.address.district}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Country</label>
                        <input
                            type="text"
                            name="address.country"
                            value={formData.address.country}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold">Applying Degree</label>
                        <select
                            name="applyingDegree"
                            value={formData.applyingDegree}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Degree</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold">SSC Result</label>
                        <input
                            type="text"
                            name="sscResult"
                            value={formData.sscResult}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">HSC Result</label>
                        <input
                            type="text"
                            name="hscResult"
                            value={formData.hscResult}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Study Gap</label>
                        <select
                            name="studyGap"
                            value={formData.studyGap}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                        >
                            <option value="">0 Year</option>
                            <option value="1 Year">1 Year</option>
                            <option value="2 Years">2 Years</option>
                            <option value="3 Years">3 Years</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-6 w-full">
                    Submit Application
                </button>
            </form>
        </div>
    );

};

export default ApplicationForm;