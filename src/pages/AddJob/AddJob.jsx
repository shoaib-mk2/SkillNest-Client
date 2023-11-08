import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddJob = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log('Add Jobbb', user);

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobOwnerEmail = form.jobOwnerEmail.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const max_price = form.max_price.value;
        const min_price = form.min_price.value;

        const newJob = { jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price }
        console.log(newJob);

        // send data to the server
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // showing sweet alert after successfully added the product to the DB 
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset(); // reset form value after successfully added the product to the DB
                navigate('/myPostedJobs');
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:gap-20 flex-col lg:flex-row-reverse md:w-4/5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add a Job!</h1>
                    <p className="py-6">Welcome to our "Add Job" page, where you can effortlessly add your Job's details to our growing online marketplace community. Whether you're a Boss, a Employer, or simply want to add a Job, this page is designed to make the process easy and enjoyable.</p>
                    {/* <img src="/addCar.png" alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddJob} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email of the Job Owner</span>
                            </label>
                            <input type="email" name="jobOwnerEmail" value={user?.email} className="input input-bordered" disabled required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="jobTitle" placeholder="Title of your Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name="deadline" placeholder="Deadline of your Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name="description" placeholder="Short description of your Job" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" name="category" required>
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
                            <input type="number" name="min_price" placeholder="Minimum price for this Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <input type="number" name="max_price" placeholder="Maximum price for this Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-600 text-white font-bold hover:text-black">Add this Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;