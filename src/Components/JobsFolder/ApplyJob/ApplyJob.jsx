import PropTypes from "prop-types";
const ApplyJob = ({ data }) => {
    const { logo, job_title, company_name, remote_or_onsite } = data
    return (
        <div className="mt-5">
            <div className="border rounded-lg p-5 flex">
                <div className="flex flex-1 gap-4 items-center">
                    <div className="flex p-10 bg-[#F4F4F4] rounded-lg">
                        <img src={logo} className="w-[100px] h-[100px] object-contain" />
                    </div>
                    <div>
                        <h5 className="text-3xl font-semibold">{job_title}</h5>
                        <h5 className="text-2xl font-light">{company_name}</h5>
                        <p className="border-l-4 border-[#4745458c] pl-1">{remote_or_onsite}</p>
                    </div>
                </div>
                <div>
                    <button
                        className="bg-[#9873ff] p-4 text-white rounded-lg font-medium">
                        Show Details</button>
                </div>
            </div>
        </div>
    );
};

ApplyJob.propTypes = {
    data: PropTypes.object
}
export default ApplyJob;