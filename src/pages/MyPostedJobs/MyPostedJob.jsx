import { Link } from "react-router-dom";

const MyPostedJob = ({ myPostedJob }) => {

    const { _id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price } = myPostedJob;

    console.log(_id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price);

    return (
        <div className="card bg-neutral text-neutral-content">
            <div className="card-body">
                <h2 className="card-title">{jobTitle}</h2>
                <p>{description}</p>
                <p>Job Owner Email: {jobOwnerEmail}</p>
                <p>Deadline: {deadline}</p>
                <p>Job Category: {category}</p>
                <p>Minimum Price: {min_price}</p>
                <p>Maximum Price: {max_price}</p>
                <div className="card-actions justify-end">
                    <Link className="btn bg-lime-600" to={`/updateJob/${_id}`}>Update</Link>
                    <button className="btn bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJob;