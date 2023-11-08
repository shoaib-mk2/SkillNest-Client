import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyPostedJobs = () => {

    const { user } = useContext(AuthContext);
    const [myPostedJobs, setMyPostedJobs] = useState([]);

    const url = `http://localhost:5000/jobs?jobOwnerEmail=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPostedJobs(data))
    }, [url])

    return (
        <div>
            <h2 className="text-3xl">My Posted Jobs: {myPostedJobs.length}</h2>
        </div>
    );
};

export default MyPostedJobs;