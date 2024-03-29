import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThreePyramid from './pages/ThreePyramid';
import AppNew from './pages/AppNew';
import LandingPage from "./pages/LandingPage"
import OpeningPage from "./pages/OpeningPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/landing-page",
    element:<LandingPage /> ,
  },
  {
    path: "/three-pyramid",
    element: <ThreePyramid />,
  },
  {
    path: "/app-new",
    element: <AppNew />,
  },
  {
    path: "/app",
    element: <App />
    },
    {
        path: "/",
        element: <OpeningPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

