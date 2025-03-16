import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../../api/utlis';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import AddScholarshipForm from '../../../components/Form/AddScholarshipForm';
import { useNavigate } from 'react-router-dom';


const AddScholarship = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const navigate = useNavigate(); 

    const onSubmit = async (data) => {
        setLoading(true);
        
            // Upload image to ImgBB
            const uploadedImageUrl = await imageUpload(data.universityImage[0]);
            const moderator = { 
                name: user?.displayName,
                image: user?.photoURL,
                email:user?.email
            }

            // Prepare scholarship data
            const scholarshipData = {
                scholarshipName: data.scholarshipName,
                universityName: data.universityName,
                universityImage: uploadedImageUrl,
                universityCountry: data.universityCountry,
                universityCity: data.universityCity,
                universityWorldRank: parseInt(data.universityWorldRank),
                subjectCategory: data.subjectCategory,
                scholarshipCategory: data.scholarshipCategory,
                degree: data.degree,
                tuitionFees: parseFloat(data.tuitionFees) || null,
                applicationFees: parseFloat(data.applicationFees),
                serviceCharge: parseFloat(data.serviceCharge),
                applicationDeadline: data.applicationDeadline,
                postDate: new Date().toISOString(), // Current date and time
                postedUserEmail: data.postedUserEmail,
                moderator: moderator,
                description: data.scholarshipDescription,
                subjectName: data.subjectName,
                isStipend :data.stipendAvailable
            };
            console.log(scholarshipData);
            try {
            // Send data to backend API
            await axiosSecure.post(`/addScholarship`, scholarshipData);
            toast.success("Data added successfully!")
            navigate('/');
        

            // Reset form and show success message
            reset();
           // alert('Scholarship added successfully!');
        } catch (error) {
            console.error('Error adding scholarship:', error);
            //alert('Failed to add scholarship. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <Helmet>
                <title>Add Scholarship | Dashboard</title>
            </Helmet>
            <AddScholarshipForm
            register={register}
            handleSubmit={handleSubmit}
            loading={loading}
            onSubmit={onSubmit}
            errors={errors}
            ></AddScholarshipForm>
        </div>

    );
};

export default AddScholarship;