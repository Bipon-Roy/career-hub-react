const getStoredJobApplications = () => {
    const storedApplications = localStorage.getItem("job-applications");
    if (storedApplications) {
        return JSON.parse(storedApplications);
    }
    return [];
};

const saveJobApplications = (id) => {
    const storedApplications = getStoredJobApplications();
    const exist = storedApplications.find((jobId) => jobId === id);
    if (!exist) {
        storedApplications.push(id);
        localStorage.setItem("job-applications", JSON.stringify(storedApplications));
    }
};

export { getStoredJobApplications, saveJobApplications };
