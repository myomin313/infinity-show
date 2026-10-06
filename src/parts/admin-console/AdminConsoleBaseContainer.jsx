import React from "react";

const AdminConsoleBaseContainer = ({ children }) => {
  return (
    <div className={`min-h-[calc(100vh-4rem)] h-full bg-white p-6 space-y-4`}>
      {children}
    </div>
  );
};

export default AdminConsoleBaseContainer;
