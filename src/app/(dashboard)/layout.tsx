import AppNavbar from "@/components/app-components.tsx/app-navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppNavbar />
      {children}  
    </>
  );
};

export default DashboardLayout;
