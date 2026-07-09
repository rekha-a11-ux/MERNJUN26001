import React from "react";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      AdminPage
      <Outlet />
    </div>
  );
}

export default AdminPage;
