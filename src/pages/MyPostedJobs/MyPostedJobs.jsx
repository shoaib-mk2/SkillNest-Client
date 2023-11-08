import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyPostedJob from "./MyPostedJob";

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
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
            {
                myPostedJobs.map(myPostedJob => <MyPostedJob
                    key={myPostedJob._id}
                    myPostedJob={myPostedJob}
                ></MyPostedJob>)
            }
        </div>
    );
};

export default MyPostedJobs;