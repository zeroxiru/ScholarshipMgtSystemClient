import React from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import PropTypes from 'prop-types';

const AddScholarshipForm = ({ register, handleSubmit, loading, onSubmit, errors }) => {

    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-gray-200 dark: text-black shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add Scholarship</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 dark: bg-white pl-3 pr-3 ">
                    <div className="form-control">
                        <label className="label">Scholarship Name</label>
                        <input
                            type="text"
                            placeholder="Enter scholarship name"
                            className="input input-bordered dark: bg-white "
                            {...register('scholarshipName', { required: 'Scholarship Name is required' })}
                        />
                        {errors.scholarshipName && <p className="text-red-500">{errors.scholarshipName.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">University Name</label>
                        <input
                            type="text"
                            placeholder="Enter university name"
                            className="input input-bordered dark: bg-white "
                            {...register('universityName', { required: 'University Name is required' })}
                        />
                        {errors.universityName && <p className="text-red-500">{errors.universityName.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">University Image/Logo</label>

                        <label className="w-full cursor-pointer bg-white dark:bg-white text-black dark:text-black border border-gray-300 rounded px-4 py-2 inline-block">
                            Choose File
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                {...register('universityImage', { required: 'University image is required' })}
                            />
                        </label>

                        {errors.universityImage && (
                            <p className="text-red-500">{errors.universityImage.message}</p>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">University Country</label>
                        <input
                            type="text"
                            placeholder="Enter country"
                            className="input input-bordered dark: bg-white "
                            {...register('universityCountry', { required: 'Country is required' })}
                        />
                        {errors.universityCountry && <p className="text-red-500">{errors.universityCountry.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label dark: bg-white ">University City</label>
                        <input
                            type="text"
                            placeholder="Enter city"
                            className="input input-bordered dark: bg-white "
                            {...register('universityCity', { required: 'City is required' })}
                        />
                        {errors.universityCity && <p className="text-red-500">{errors.universityCity.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">University World Rank</label>
                        <input
                            type="number"
                            placeholder="Enter world rank"
                            className="input input-bordered dark: bg-white "
                            {...register('universityWorldRank', { required: 'World Rank is required' })}
                        />
                        {errors.universityWorldRank && <p className="text-red-500">{errors.universityWorldRank.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">Subject Category</label>
                        <select
                            className="select select-bordered dark: bg-white "
                            {...register('subjectCategory', { required: 'Subject Category is required' })}
                        >
                            <option value="">Select...</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                        {errors.subjectCategory && <p className="text-red-500">{errors.subjectCategory.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label ">Scholarship Category</label>
                        <select
                            className="select select-bordered dark: bg-white"
                            {...register('scholarshipCategory', { required: 'Scholarship Category is required' })}
                        >
                            <option value="">Select...</option>
                            <option value="Full fund">Full fund</option>
                            <option value="Partial">Partial</option>
                            <option value="Self-fund">Self-fund</option>
                        </select>
                        {errors.scholarshipCategory && <p className="text-red-500">{errors.scholarshipCategory.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">Degree</label>
                        <select
                            className="select select-bordered dark: bg-white"
                            {...register('degree', { required: 'Degree is required' })}
                        >
                            <option value="">Select...</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                        {errors.degree && <p className="text-red-500">{errors.degree.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">Tuition Fees (optional)</label>
                        <input
                            type="number"
                            placeholder="Enter tuition fees"
                            className="input input-bordered dark: bg-white"
                            {...register('tuitionFees')}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Application Fees</label>
                        <input
                            type="number"
                            placeholder="Enter application fees"
                            className="input input-bordered dark: bg-white"
                            {...register('applicationFees', { required: 'Application Fees are required' })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">Service Charge</label>
                        <input
                            type="number"
                            placeholder="Enter service charge"
                            className="input input-bordered dark: bg-white"
                            {...register('serviceCharge', { required: 'Service Charge is required' })}
                        />
                        {errors.serviceCharge && <p className="text-red-500">{errors.serviceCharge.message}</p>}
                    </div>

                    {/* Application Deadline */}
                    <div className="form-control">
                        <label className="label">Application Deadline</label>
                        <input
                            type="date"
                            className="input input-bordered dark: bg-white"
                            {...register('applicationDeadline', { required: 'Application Deadline is required' })}
                        />
                        {errors.applicationDeadline && <p className="text-red-500">{errors.applicationDeadline.message}</p>}
                    </div>

                    {/* Posted User Email */}
                    <div className="form-control">
                        <label className="label">Posted User Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered dark: bg-white"
                            {...register('postedUserEmail', {
                                required: 'Posted User Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.postedUserEmail && <p className="text-red-500">{errors.postedUserEmail.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">Subject Name</label>
                        <input
                            type="text"
                            placeholder="Enter subject name "
                            className="input input-bordered dark: bg-white"
                            {...register('subjectName', { required: 'Subject Name is required' })}
                        />
                        {errors.subjectName && <p className="text-red-500">{errors.subjectName.message}</p>}
                    </div>


                    <div className="form-control  ">
                        <label className="label cursor-pointer mt-6 ">
                            <span className="label">Stipend Available</span>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-md dark: bg-white"
                                {...register('stipendAvailable', {
                                    setValues: (value) => (value ? 'Available' : 'Not Available')
                                })}
                            />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">Scholarship Description</label>
                        <textarea
                            placeholder="Enter scholarship description"
                            className="textarea textarea-bordered w-full h-32 dark: bg-white"
                            {...register('scholarshipDescription', { required: 'Scholarship Description is required' })}
                        />
                        {errors.scholarshipDescription && <p className="text-red-500">{errors.scholarshipDescription.message}</p>}
                    </div>



                    {/* Submit Button */}
                    <div className="form-control mt-6 md:col-span-2 mb-3">
                        <button type="submit" className="btn bg-slate-500 w-1/3 mx-auto text-white" disabled={loading}>
                            {loading ? (
                                <TbFidgetSpinner className='animate-spin m-auto' />
                            ) : ('Add Scholarship')}
                        </button>
                    </div>

                </form >
            </div >
        </div>
    );
};

AddScholarshipForm.propTypes = {
    register: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,

}

export default AddScholarshipForm;