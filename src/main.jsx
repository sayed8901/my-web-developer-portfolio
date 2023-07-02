import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project1 from './pages/ProjectDetails/Project1.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: 'project1',
    element: <Project1></Project1>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
