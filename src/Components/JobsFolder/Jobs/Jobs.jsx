import { useLoaderData } from "react-router-dom";
import { getData } from "../../../Storage";
import ApplyJob from "../ApplyJob/ApplyJob";

const Jobs = () => {
    const storedData = getData()
    const jobData = useLoaderData()

    
    return (

        <div className="mx-[5%] lg:mx-[10%] mt-14">
            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="btn m-1">open or close</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="space-y-3">
                {
                    storedData.length > 0 ? jobData.map(data =>
                        storedData.includes(data.id + "") &&
                        <ApplyJob key={data.id} data={data} />) :
                        <div className="flex items-center justify-center h-[70vh]">
                            <h1 className="font-bold text-5xl">Please Apply for a job then you see here your applied Job</h1>
                        </div>

                    // filterdData.map(data => <ApplyJob key={data.id} data={data}></ApplyJob>)




                }
            </div>
        </div>
    );
};
export default Jobs;