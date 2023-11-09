import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyBidsRow from "./MyBidsRow";

const MyBids = () => {

    const { user } = useContext(AuthContext);
    const [myBids, setMyBids] = useState([]);

    const url = `http://localhost:5000/bids?bidderEmail=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBids(data))
    }, [url])

    console.log('My Bids', myBids);

    const handleCompleteMyBid = id => {
        fetch(`http://localhost:5000/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'complete' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(myBid => myBid._id !== id);
                    const updated = myBids.find(myBid => myBid._id === id);
                    updated.status = 'complete'
                    const newMyBids = [updated, ...remaining];
                    setMyBids(newMyBids);
                }
            })
    }

    return (
        <div className="min-h-screen">
            {
                myBids.length > 0 ?
                    <div className="overflow-x-auto w-4/5 mx-auto">
                        <h2 className="text-2xl font-semibold my-10 p-3 text-center border-2">My Bids</h2>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Job Title</th>
                                    <th>Email</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myBids.map(myBid => <MyBidsRow
                                        key={myBid._id}
                                        myBid={myBid}
                                        handleCompleteMyBid={handleCompleteMyBid}
                                    ></MyBidsRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="w-4/5 mx-auto">
                        <h2 className="text-2xl font-semibold my-10 p-3 text-center border-2">My Bids</h2>
                        <p className="text-2xl font-medium text-center mt-5">You are not bidding any job.</p>
                    </div>
            }
        </div>
    );
};

export default MyBids;