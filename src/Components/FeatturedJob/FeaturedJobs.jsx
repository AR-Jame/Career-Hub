import { useEffect, useState } from "react";
import SingleJobCard from "./SingleJobCard";

const FeaturedJobs = () => {
    const [featured, setFeaturde] = useState([]);
    const [dataLen, setDataLen] = useState(4)
    useEffect(() => {
        fetch("../../../public/data/jobs.json")
        .then(res => res.json())
        .then(data => setFeaturde(data))
    }, [])
    return (
        <div className="mx-[5%] lg:mx-[10%] ">
            <h3 className="text-5xl font-bold text-center mb-5">Featured Jobs</h3>
            <p className="text-center mb-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-5 mb-10">
                {
                    featured.slice(0, dataLen).map(jobData =>
                         <SingleJobCard
                          key={jobData.id}
                          jobData = {jobData}
                          ></SingleJobCard>)
                }
            </div>
            <div className={dataLen === featured.length ? "hidden" : "block text-center"}>
                <button onClick={() => setDataLen(featured.length)} className="btn bg-[#9f82ec] text-white font-semibold text-base text-center">Show More</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;