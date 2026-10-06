import React from "react";

const AdminConsoleTopSection = ({ title, subtitle, children }) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-3 mb-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {subtitle && <p className="text-gray-800">{subtitle}</p>}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default AdminConsoleTopSection;
