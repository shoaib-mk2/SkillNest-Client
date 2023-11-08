import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrowseByCategory from "./BrowseByCategory";

const Home = () => {

    const allJobs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory allJobs={allJobs}></BrowseByCategory>
        </div>
    );
};

export default Home;