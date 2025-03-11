import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Dashboard,
  Campaigns,
  Customers,
  FollowUps,
  Integrations,
} from "./components";
import { Page1, Page2, Page3, Page4 } from "./components/Campaign/Modal/main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="followups" element={<FollowUps />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="campaigns" element={<Campaigns />}>
          <Route path="1" element={<Page1 />} />
          <Route path="2" element={<Page2 />} />
          <Route path="3" element={<Page3 />} />
          <Route path="4" element={<Page4 />} />
        </Route>
      </Route>
    </>
    // <Route path='/'></Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
