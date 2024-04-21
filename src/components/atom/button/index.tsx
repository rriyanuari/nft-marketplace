interface ButtonProps {
  size: "primary" | "secondary" | "tertiary";
  variant: "filled" | "outline";
  children: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, variant, className } = props;

  return (
    <button
      className={`text-button h-[60px] px-[50px] rounded-[20px] ${
        variant == "filled" ? "bg-callToAction" : "border-2 border-callToAction"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
