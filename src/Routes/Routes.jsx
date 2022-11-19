import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor";
import AllUsers from "../Pages/DashBoard/AllUsers";
import ManageDoctors from "../Pages/DashBoard/ManageDoctors";
import MyAppointment from "../Pages/DashBoard/MyAppointment";
import Payment from "../Pages/DashBoard/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Reviews/Reviews";
import ErrorPage from "../Shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/Reviews',
                element: <Reviews />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;