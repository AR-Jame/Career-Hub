import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Category from "../Category/Category";
import FeaturedJobs from "../FeatturedJob/FeaturedJobs";
const Home = () => {
    const JobCategory = useLoaderData()
    
    return (
        <div className="space-y-20">
            <Header></Header>
            <Category JobCategory={JobCategory}></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;