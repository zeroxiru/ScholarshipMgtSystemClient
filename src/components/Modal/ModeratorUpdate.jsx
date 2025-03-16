import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ModeratorUpdate = ({ isUpdateModalOpen,applicationData, closeModal, onUpdate }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: applicationData,
    });
    const onSubmit = (data) => {
        onUpdate(data); // Call the update function with the updated data
        toast.success('Scholarship info updated successfully!');
        closeModal(); // Close the modal
    };

    const handleReset = () => {
        reset(applicationData); // Reset form to initial state
        toast.info('Form reset to initial state');
    };

    if (!isUpdateModalOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Update Scholarship Information</h2>
                    <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">&times;</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Scholarship Name
                            </label>
                            <input
                                {...register('scholarshipName')}
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                University Name
                            </label>
                            <input
                                {...register('universityName')}
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">Subject Category</label>
                            <select
                                className="select select-bordered"
                                {...register('subjectCategory', { required: 'Subject Category is required' })}
                            >
                                <option value="">Select...</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Doctor">Doctor</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">Applied Degree</label>
                            <select
                                className="select select-bordered"
                                {...register('degree', { required: 'Degree is required' })}
                            >
                                <option value="">Select...</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Masters">Masters</option>
                            </select>

                        </div>
                        <div className="form-control">
                        <label className="label">Scholarship Category</label>
                        <select
                            className="select select-bordered"
                            {...register('scholarshipCategory', { required: 'Scholarship Category is required' })}
                        >
                            <option value="">Select...</option>
                            <option value="Full fund">Full fund</option>
                            <option value="Partial">Partial</option>
                            <option value="Self-fund">Self-fund</option>
                        </select>
                       
                    </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Application Fees
                            </label>
                            <input
                                {...register('applicationFees')}
                                type="number"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Service Charge
                            </label>
                            <input
                                {...register('serviceCharge')}
                                type="number"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="form-control">
                        <label className="label">Application Deadline</label>
                        <input
                            type="date"
                            className="input input-bordered"
                            {...register('applicationDeadline', { required: 'Application Deadline is required' })}
                        />
                       
                    </div>

                    </div>
                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModeratorUpdate;