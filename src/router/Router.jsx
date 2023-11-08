import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../pages/Routes/PrivateRoute";
import UpdateJob from "../pages/UpdateJob/UpdateJob";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/jobs")
            },
            {
                path: "/addJob",
                element: <AddJob></AddJob>
            },
            {
                path: "/updateJob/:id",
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobById/${params.id}`)
            },
            {
                path: "/myPostedJobs",
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: "/myBids",
                element: <MyBids></MyBids>
            },
            {
                path: "/bidRequests",
                element: <BidRequests></BidRequests>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;