import React from "react";

const shapes = { round: "rounded-[20px]", circle: "rounded-[50%]" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    indigo_700: "bg-indigo-700 shadow-bs text-white-A700",
    indigo_600: "bg-indigo-600 text-white-A700",
    gray_102: "bg-gray-102",
  },
  outline: {
    green_600: "border-2 border-green-600 border-solid",
    red_700: "border-2 border-red-700 border-solid",
    indigo_600: "border border-indigo-600 border-solid text-indigo-600",
    indigo_500: "border border-indigo-500 border-solid text-indigo-500",
  },
} as const;
const sizes = { xs: "p-2", sm: "p-3", md: "p-[15px]", lg: "p-5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
