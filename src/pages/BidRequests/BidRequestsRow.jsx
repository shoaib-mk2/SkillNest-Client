
const BidRequestsRow = ({ bidRequest, handleAcceptBid }) => {

    const { _id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price, biddingAmount, bidderEmail, status } = bidRequest;

    return (
        <tr>
            <td>{jobTitle}</td>
            <td>{bidderEmail}</td>
            <td>{deadline}</td>
            <td>
                {
                    status === 'in progress'
                    ?
                    <span>in progress</span>
                    :
                    <span>pending</span>
                }
            </td>
            <th>
                <button onClick={() => handleAcceptBid(_id)} className="btn btn-xs bg-green-700 text-white font-bold hover:text-black md:btn-md">Accept</button>
                <button className="btn btn-xs bg-red-700 text-white font-bold hover:text-black md:btn-md ml-4">Reject</button>
            </th>
        </tr>
    );
};

export default BidRequestsRow;