import React from "react";
import { Navigate } from "react-router-dom";
import Role from "src/models/enums/role";

interface AdminRouteProps {
  userRole: Role.Admin | null;
  children: React.ReactNode;
}

function AdminRoute(props: AdminRouteProps): JSX.Element {
  if (props.userRole !== Role.Admin) {
    return <Navigate to="/" />;
  }
  return <>{props.children}</>;
}

export default AdminRoute;
 