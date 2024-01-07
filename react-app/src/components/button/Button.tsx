import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning" | "success" | "light" | "info";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
