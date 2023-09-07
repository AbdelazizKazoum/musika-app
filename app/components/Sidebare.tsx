import React from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const SIdebare: React.FC<SidebarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SIdebare;
