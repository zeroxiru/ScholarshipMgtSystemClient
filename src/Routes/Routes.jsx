import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import AddScholarship from "../pages/Dashboard/Moderator/AddScholarship";
import PrivateRoute from "./PrivateRoute";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import AllScholarship from "../pages/AllScholarship/AllScholarship";
import ApplicationForm from "../pages/Dashboard/Student/ApplicationForm";
import MyApplication from "../pages/Dashboard/Student/MyApplication";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile"
import MyReviews from "../pages/Dashboard/Student/MyReviews";
import ModeratorRoute from "./ModeratorRoute";
import ManageScholarship from "../pages/Dashboard/Moderator/ManageScholarship";
import AllReviewsByModerator from "../pages/Dashboard/Moderator/AllReviewsByModerator";
import Statistics from "../pages/Dashboard/Common/Statistics";
import AllAppliedScholarship from "../pages/Dashboard/Moderator/AllAppliedScholarship";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/all-scholarships',
        element: <AllScholarship></AllScholarship>
      },
      {
        path: '/scholarship/:id',
        element: <ScholarshipDetails></ScholarshipDetails>,
      },

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/dashboard',
    element: (
     <PrivateRoute>
       <DashboardLayout></DashboardLayout>
     </PrivateRoute>
    ),
    children: [
      { 
        index: true,
        element: (
          <PrivateRoute>
            <AdminRoute>
            <Statistics></Statistics>
            </AdminRoute>
          </PrivateRoute>
        )
      },
      {
        path: 'add-scholarship',
        element: ( 
          <PrivateRoute>
            <ModeratorRoute><AddScholarship></AddScholarship></ModeratorRoute>
          </PrivateRoute>
        ),
      },
      { 
        path: 'apply-scholarship/:id',
        element: ( 
          <PrivateRoute>
            <ApplicationForm></ApplicationForm>
          </PrivateRoute>
        ),
      }
      ,
      { 
        path: 'my-applications/:email',
        element: ( 
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      { 
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        )
      },
      ,
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      { 
        path: 'my-reviews',
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        )

      },
      { 
        path: 'manage-scholarships',   
        element: (
          <PrivateRoute>
            <ModeratorRoute>
            <ManageScholarship></ManageScholarship>
            </ModeratorRoute>
          </PrivateRoute>
        )
      },
      { 
        path: 'all-applied-scholarships',  
         element:( <PrivateRoute>
            <ModeratorRoute>
            <AllAppliedScholarship></AllAppliedScholarship>
            </ModeratorRoute>
          </PrivateRoute>
         )
      },
      
      { 
        path: 'all-reviews',
        element: (
          <PrivateRoute>
            <ModeratorRoute>
            <AllReviewsByModerator></AllReviewsByModerator>
            </ModeratorRoute>
          </PrivateRoute>
        )
      },
      
    ]
  }

]);