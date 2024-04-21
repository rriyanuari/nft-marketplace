interface ButtonProps {
  size: "primary" | "secondary" | "tertiary";
  variant: "filled" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, className } = props;

  return (
    <button
      className={`bg-callToAction text-button h-[60px] px-[50px] rounded-[20px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
