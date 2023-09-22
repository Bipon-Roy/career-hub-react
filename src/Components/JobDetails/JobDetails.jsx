import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplications } from "../../utilities/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const IdInt = parseInt(id);
    const job = jobs.find((job) => job.id === IdInt);

    const handelApplyJob = () => {
        saveJobApplications(IdInt);
        toast("You Have Applied Successfully");
    };
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button
                        className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
                        onClick={handelApplyJob}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
