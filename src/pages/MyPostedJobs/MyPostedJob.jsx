import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJob = ({ myPostedJob, myPostedJobs, setMyPostedJobs }) => {

    const { _id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price } = myPostedJob;

    const handleDeleteJob = _id => {

        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = myPostedJobs.filter(myPJ => myPJ._id !== _id);
                            setMyPostedJobs(remaining);
                        }
                    })
            }
        })
    }

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
                    <button onClick={() => handleDeleteJob(_id)} className="btn bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJob;