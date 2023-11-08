
const CardsByCategory = ({ allJob }) => {

    const { jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price } = allJob;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{jobTitle}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardsByCategory;