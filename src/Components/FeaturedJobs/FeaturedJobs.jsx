import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <div className="mt-20">
            <div className="text-center space-y-2 ">
                <h1 className="text-4xl font-extrabold">Featured Jobs</h1>
                <p className="text-[#757575]">
                    Explore thousands of job opportunities with all the information you need. Its
                    your future
                </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
                {jobs.slice(0, dataLength).map((job) => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
            <div
                className={`flex justify-center my-4 ${dataLength === jobs.length ? "hidden" : ""}`}
            >
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white "
                >
                    Show All
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
