
const BidRequestsRow = ({ bidRequest }) => {

    const { jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price, biddingAmount, bidderEmail } = bidRequest;

    return (
        <tr>
            <td>{jobTitle}</td>
            <td>{bidderEmail}</td>
            <td>{deadline}</td>
            <td>Pending</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BidRequestsRow;