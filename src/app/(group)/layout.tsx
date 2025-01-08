import React from "react";

const GroupLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>Group layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default GroupLayout;
