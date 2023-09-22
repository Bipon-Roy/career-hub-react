import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import JobDetails from "./Components/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/applied",
                element: <AppliedJobs />,
                loader: () => fetch("../jobs.json"),
            },
            {
                path: "/job/:id",
                element: <JobDetails />,
                loader: () => fetch("../jobs.json"),
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
