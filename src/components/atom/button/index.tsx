import { motion } from "framer-motion";

interface ButtonProps {
  size: "primary" | "secondary" | "tertiary";
  variant: "filled" | "outline";
  children: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, variant, className } = props;

  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.5 }}
      className={`text-button h-[60px] px-[50px] rounded-[20px] ${
        variant == "filled" ? "bg-callToAction" : "border-2 border-callToAction"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
