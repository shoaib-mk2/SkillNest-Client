import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BidRequestsRow from "./BidRequestsRow";

const BidRequests = () => {

    const { user } = useContext(AuthContext);
    const [bidRequests, setBidRequests] = useState([]);

    const url = `http://localhost:5000/bids?jobOwnerEmail=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBidRequests(data))
    }, [url])

    console.log('My Bids', bidRequests);

    const handleAcceptBid = id => {
        fetch(`http://localhost:5000/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'in progress' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bidRequests.filter(bidRequest => bidRequest._id !== id);
                    const updated = bidRequests.find(bidRequest => bidRequest._id === id);
                    updated.status = 'in progress'
                    const newBidRequests = [updated, ...remaining];
                    setBidRequests(newBidRequests);
                }
            })
    }

    return (
        <div className="min-h-screen">
            {
                bidRequests.length > 0 ?
                    <div className="overflow-x-auto w-4/5 mx-auto">
                        <h2 className="text-2xl font-semibold my-10 p-3 text-center border-2">Bid Requests</h2>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Job Title</th>
                                    <th>Bidder Email</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bidRequests.map(bidRequest => <BidRequestsRow
                                        key={bidRequest._id}
                                        bidRequest={bidRequest}
                                        handleAcceptBid={handleAcceptBid}
                                    ></BidRequestsRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="w-4/5 mx-auto">
                        <h2 className="text-2xl font-semibold my-10 p-3 text-center border-2">Bid Requests</h2>
                        <p className="text-2xl font-medium text-center mt-5">No bid request found.</p>
                    </div>
            }
        </div>
    );
};

export default BidRequests;