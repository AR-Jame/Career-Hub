import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jobs from './Components/JobsFolder/Jobs/Jobs.jsx';
import Form from './Components/Form/Form.jsx';
import Home from './Components/Home/Home.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import Error from './Components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:() => fetch("../public/data/categories.json"),
      },
      {
        path:"/job/:Id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../public/data/jobs.json")
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader: () => fetch("../public/data/jobs.json")
      },
      {
        path: "/form",
        element: <Form></Form>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
