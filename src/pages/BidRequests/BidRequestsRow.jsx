
const BidRequestsRow = ({ bidRequest, handleAcceptBid, handleRejectBid }) => {

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
                        <span className="bg-yellow-700 p-1 text-white">in progress</span>
                        :
                        status === 'rejected'
                            ?
                            <span className="bg-red-700 p-1 text-white">rejected</span>
                            :
                            <span>pending</span>
                }
            </td>
            <th>
                <button onClick={() => handleAcceptBid(_id)} className={`btn btn-xs bg-green-700 text-white font-bold hover:text-black md:btn-md ${status === 'in progress' || status === 'rejected' ? 'hidden' : ''}`}>Accept</button>
                <button onClick={() => handleRejectBid(_id)} className={`btn btn-xs ml-2 bg-red-700 text-white font-bold hover:text-black md:btn-md ${status === 'in progress' || status === 'rejected' ? 'hidden' : ''}`}>Reject</button>
            </th>
        </tr>
    );
};

export default BidRequestsRow;