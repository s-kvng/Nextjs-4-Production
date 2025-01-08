import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>dashboard layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
