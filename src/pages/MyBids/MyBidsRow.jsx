
const MyBidsRow = ({ myBid, handleCompleteMyBid }) => {

    const { _id, jobOwnerEmail, jobTitle, deadline, description, category, max_price, min_price, biddingAmount, bidderEmail, status } = myBid;

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
                            <span className="bg-red-700 p-1 text-white">canceled</span>
                            :
                            status === 'complete'
                                ?
                                <span className="bg-green-700 p-1 text-white">complete</span>
                                :
                                <span>pending</span>
                }
            </td>
            <th>
                <button onClick={() => handleCompleteMyBid(_id)} className={`btn btn-xs bg-green-700 text-white font-bold hover:text-black md:btn-md ${status === 'in progress' ? 'display' : 'hidden'}`}>Complete</button>
            </th>
        </tr>
    );
};

export default MyBidsRow;