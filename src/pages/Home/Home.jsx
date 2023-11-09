import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrowseByCategory from "./BrowseByCategory";
import SiteStats from "./SiteStats";
import GotAQuestion from "./GotAQuestion";

const Home = () => {

    const allJobs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory allJobs={allJobs}></BrowseByCategory>
            <SiteStats></SiteStats>
            <GotAQuestion></GotAQuestion>
        </div>
    );
};

export default Home;