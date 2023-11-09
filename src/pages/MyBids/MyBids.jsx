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

    return (
        <div className="min-h-screen">
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
                            myBids.map(myBid => <MyBidsRow key={myBid._id} myBid={myBid}></MyBidsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;