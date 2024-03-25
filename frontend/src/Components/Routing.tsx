import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminRoute from "src/Views/Admin/AdminRoute";
import Role from "src/models/enums/role";

const Home = React.lazy(() => import("../Views/Home/Home"));
const About = React.lazy(() => import("../Views/About/About"));
const Certificates = React.lazy(
  () => import("../Views/Certificates/Certificates")
);
const Contact = React.lazy(() => import("../Views/Contact/Contact"));
const MeetTheTeam = React.lazy(
  () => import("../Views/MeetTheTeam/MeetTheTeam")
);
const Volunteering = React.lazy(
  () => import("../Views/Volunteering/Volunteering")
);
const AdminView = React.lazy(
  () => import("../Views/Admin/AdminView/AdminView")
);

function Routing(): JSX.Element {
  // Use useSelector to access the current user role from the Redux store.
  const userRole = useSelector(
    (state: { auth: { userRole: Role.Admin } }) => state.auth.userRole
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route
          path="/admin"
          element={
            <AdminRoute userRole={userRole}>
              <AdminView />
            </AdminRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default Routing;
