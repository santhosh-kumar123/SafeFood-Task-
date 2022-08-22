import React from 'react'
import { useRoutes } from 'react-router-dom'
import SignIn from '../components/form/SignIn';
import SignUp from "../components/form/SignUp";
import SideNavBar from '../components/sideNavbar/SideNavbar';
import Home from '../pages/Home'
import CreateEmployees from "../components/employees/CreateEmployees";
import DeleteEmployees from '../components/employees/DeleteEmployees';
import EditEmployees from '../components/employees/EditEmployees';
const Routes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sidenavbar",
      element: <SideNavBar />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/CreateEmployee",
      element: <CreateEmployees />,
    },
    {
      path: "/DeleteEmloyee",
      element: <DeleteEmployees />,
    },
    {
      path: "/EditEmployee/:id",
      element: <EditEmployees />,
    },
  ]);
  return routes
}

export default Routes