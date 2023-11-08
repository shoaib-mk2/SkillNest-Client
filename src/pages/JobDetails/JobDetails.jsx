import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const JobDetails = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const jobById = useLoaderData();
    const { _id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price } = jobById;

    const handleBid = e => {
        e.preventDefault();
        const form = e.target;
        const biddingAmount = form.biddingAmount.value;
        const bidderEmail = form.bidderEmail.value;

        const newBid = { jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price, biddingAmount, bidderEmail }
        console.log(newBid);

        // send data to the server
        fetch('http://localhost:5000/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // showing sweet alert after successfully added the data to the DB 
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Bidding Successfully Done',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset(); // reset form value after successfully added the data to the DB
                navigate('/myBids');
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:gap-20 flex-col lg:flex-row-reverse md:w-4/5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{jobTitle}</h1>
                    <p className="py-6"><span className="font-bold">Deadline:</span> {deadline}</p>
                    <p className="py-6"><span className="font-bold">Price Range:</span> ${min_price} to ${max_price}</p>
                    <p className="py-6"><span className="font-bold">Description:</span> {description}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleBid} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Bidding Amount</span>
                            </label>
                            <input type="number" name="biddingAmount" placeholder="Your bidding amount for this Job" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name="deadline" defaultValue={deadline} placeholder="Deadline of your Job" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="bidderEmail" value={user?.email} className="input input-bordered" disabled required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email of the Job Owner</span>
                            </label>
                            <input type="email" name="jobOwnerEmail" value={jobOwnerEmail} className="input input-bordered" disabled required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-600 text-white font-bold hover:text-black" disabled={user?.email === jobOwnerEmail && "disabled"}>Bid on the project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;