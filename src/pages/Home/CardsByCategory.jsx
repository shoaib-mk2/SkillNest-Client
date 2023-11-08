import { Link } from "react-router-dom";

const CardsByCategory = ({ allJob }) => {

    const { _id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price } = allJob;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{jobTitle}</h2>
                <p><span className="font-bold">Deadline:</span> {deadline}</p>
                <p><span className="font-bold">Price Range:</span> ${min_price} to ${max_price}</p>
                <p><span className="font-bold">Description:</span> {description}</p>
                <div className="">
                    <Link className="btn bg-lime-600 text-white hover:text-black font-bold w-full" to={`/jobDetails/${_id}`}>Bid Now</Link>
                </div>
            </div>
        </div>
    );
};

export default CardsByCategory;