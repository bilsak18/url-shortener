import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  className: string;
  label: string;
  type: ButtonHTMLAttributes<Element>["type"];
};

export default function Button({ className, type, label }: ButtonProps) {
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
}
