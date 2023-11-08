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
        <div className="">
            <h2 className="text-2xl md:text-4xl font-bold text-center my-10 border-b-2 pb-5 w-4/5 mx-auto">My Posted Jobs</h2>
            {
                myPostedJobs.length > 0
                    ?
                    <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
                        {
                            myPostedJobs.map(myPostedJob => <MyPostedJob
                                key={myPostedJob._id}
                                myPostedJob={myPostedJob}
                                myPostedJobs={myPostedJobs}
                                setMyPostedJobs={setMyPostedJobs}
                            ></MyPostedJob>)
                        }
                    </div>
                    :
                    <p className="flex justify-center items-center md:text-xl lg:text-3xl font-bold w-4/5 mx-auto min-h-[60vh]">
                        You did not post any Job yet.
                        <br /><br />
                        Add some Jobs to see it here.
                    </p>
            }
        </div>
    );
};

export default MyPostedJobs;