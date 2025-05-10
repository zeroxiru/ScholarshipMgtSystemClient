import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../../api/utlis';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import AddScholarshipForm from '../../../components/Form/AddScholarshipForm';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


const AddScholarship = () => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [selectedFileName, setSelectedFileName]= useState(false)
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file =  e.target.files[0];
        if(file) { 
            setValue('universityImage', file)
            setSelectedFileName(file.name);
        }
    }
    
        const {data:disciplineCategory = [],  isLoading} =  useQuery( { 
            queryKey: ['discipline-categories'],
            queryFn:  async () => {
                const {data} = await axiosSecure('/discipline-category-titles')
                return data;
            },
           
        })
        console.log(disciplineCategory) 

       const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        const {
            scholarshipName,
            universityName,
            universityCountry,
            universityCity,
            universityWorldRank,
            applicationDeadline,
            applicationFees,
            degree,
            disciplineCategory,
            postedUserEmail,
            scholarshipCategory,
            scholarshipDescription,
            serviceCharge,
            stipendAvailable,
            subjectCategory,
            subjectName,
            tuitionFees,
            universityImage, // File comes here
          } = data;
        
        try {
          // Check if image is uploaded
          if (!universityImage || universityImage.length === 0) {
            toast.error('Please upload a university image!');
            setLoading(false);
            return;
          }
      
          // Upload image to ImgBB
          const uploadedImageUrl = await imageUpload(universityImage);
          console.log(uploadedImageUrl);
      
          // Prepare moderator data
          const moderator = { 
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
          };
      
          // Prepare scholarship data
          const scholarshipData = {
            scholarshipName: scholarshipName,
            universityName: universityName,
            universityImage: uploadedImageUrl,
            universityCountry: universityCountry,
            universityCity: universityCity,
            universityWorldRank: parseInt(universityWorldRank),
            subjectCategory: subjectCategory,
            scholarshipCategory: scholarshipCategory,
            degree: degree,
            tuitionFees: tuitionFees ? parseFloat(tuitionFees) : null,
            applicationFees: applicationFees ? parseFloat(applicationFees) : null,
            serviceCharge: serviceCharge ? parseFloat(serviceCharge) : null,
            applicationDeadline: applicationDeadline,
            postDate: new Date().toISOString(),
            postedUserEmail: postedUserEmail,
            moderator: moderator,
            description: scholarshipDescription,
            subjectName: subjectName,
            isStipend: stipendAvailable,
            disciplineCategory: disciplineCategory
          };
      
          console.log('Final scholarship data:', scholarshipData);
      
          // Send data to backend
          await axiosSecure.post('/addScholarship', scholarshipData);
      
          toast.success('Scholarship added successfully!');
          reset();
          navigate('/');
      
        } catch (error) {
          console.error('Error adding scholarship:', error);
          toast.error('Failed to add scholarship. Please try again.');
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
            disciplineCategory={disciplineCategory}
            setValue={setValue}
            setSelectedFileName={setSelectedFileName}
            selectedFileName= {selectedFileName}
            handleFileChange={handleFileChange}

            ></AddScholarshipForm>
        </div>

    );
};

export default AddScholarship;