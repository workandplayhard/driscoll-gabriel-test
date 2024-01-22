import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
      {children}
    </div>
  );
};
