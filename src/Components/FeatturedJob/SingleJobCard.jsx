import PropTypes from "prop-types";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";



const SingleJobCard = ({ jobData }) => {
    const {id, logo, company_name, location, salary, job_title } = jobData
    return (
        <div className="font-manrop border m-0 p-7 rounded-lg">
            <div className="w-32 mb-7">
                <img src={logo} className="h-full w-auto object-contain" />
            </div>

            <h4 className="text-xl font-bold text-[#1d1c1cb7] mb-[2px]">{job_title}</h4>
            <h4 className="mb-2">{company_name}</h4>

            <div className="flex gap-5 mb-3">
                <button className="btn bg-transparent border-[#9873FF]">Remote</button>
                <button className="btn bg-transparent border-[#9873FF]">Full Time</button>
            </div>

            <div className="flex gap-6  items-center mb-3">
                <div className="flex gap-2 items-center">
                    <RiMoneyDollarCircleFill />
                    <p>{location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaMapMarkerAlt />
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}>
            <button
                className="btn bg-[#9f82ec] text-white font-semibold text-base">
                View Details
            </button>
            </Link>
        </div>
    );
};

SingleJobCard.propTypes = {
    jobData: PropTypes.object
}
export default SingleJobCard;