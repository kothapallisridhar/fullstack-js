import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <div className="btn btn-primary" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
