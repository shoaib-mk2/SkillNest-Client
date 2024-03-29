import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateJob = () => {

    const jobById = useLoaderData();
    const { _id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price } = jobById;

    const handleUpdateJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobOwnerEmail = form.jobOwnerEmail.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const max_price = form.max_price.value;
        const min_price = form.min_price.value;

        const updateJob = { jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price }
        console.log(updateJob);

        // send data to the server
        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // showing sweet alert after successfully added the data to the DB 
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Info Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                window.history.back(); // navigate back to the previous page in the browser's history
                form.reset(); // reset form value after successfully added the data to the DB
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:gap-20 flex-col lg:flex-row-reverse md:w-4/5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update a Job!</h1>
                    <p className="py-6">Welcome to our "Update Job" page, where you can effortlessly update your Job's info to our growing online marketplace community. Whether you're a Boss, a Employer, or simply want to update a Job Info, this page is designed to make the process easy and enjoyable.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateJob} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email of the Job Owner</span>
                            </label>
                            <input type="email" name="jobOwnerEmail" value={jobOwnerEmail} className="input input-bordered" disabled required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="jobTitle" defaultValue={jobTitle} placeholder="Title of your Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name="deadline" defaultValue={deadline} placeholder="Deadline of your Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name="description" defaultValue={description} placeholder="Short description of your Job" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" name="category" defaultValue={category} required>
                                <option value="" selected>What's the category of your job?</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Graphic Design">Graphic Design</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <input type="number" name="min_price" defaultValue={min_price} placeholder="Minimum price for this Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <input type="number" name="max_price" defaultValue={max_price} placeholder="Maximum price for this Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-600 text-white font-bold hover:text-black">Update this Job Info</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateJob;