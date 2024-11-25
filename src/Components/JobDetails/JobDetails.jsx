import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setData } from "../../Storage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { Id } = useParams()

    const job = jobs.find(single => Id == single.id);
    const { job_description, job_responsibility, job_title, salary } = job
    const showToast = () => {
        setData(Id)
        toast("Aplication succesful")
    }

    return (
        <div>
            <div className="bg-[#faf8ff] pt-11 pb-20 mb-9">
                <h3 className="text-center text-4xl font-bold">Job Details</h3>
            </div>
            <div className="mx-[5%] lg:mx-[10%]">
                <div className="flex">
                    <div className="space-y-6">
                        <p><span className="font-bold text-lg">Description:</span> {job_description}</p>
                        <p><span className="font-bold text-lg">Responsibility:</span> {job_responsibility}</p>
                    </div>
                    <div className="bg-[#e1d5ff] p-5 font-bold w-[40%] rounded-lg">
                        <h4 className="text-center text-2xl">Job Details</h4>
                        <hr className="border-t-[#19181842]" />
                        <div className="px-5 mb-5">
                            <p className="text-base font-medium">
                                <span className="text-lg font-semibold">Salary: </span>
                                {salary}</p>
                            <p className="text-base font-medium">
                                <span className="text-lg font-semibold">Job Title: </span>
                                {job_title}</p>
                        </div>
                        <div>
                        <Link to="" onClick={showToast}>
                            <button className="bg-[#9873ff] py-2 text-white rounded-lg font-medium w-full">Apply Now</button>
                        </Link>
                    </div>
                    </div>   
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;