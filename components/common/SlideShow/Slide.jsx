import { cn } from "@/utils/cn";

const Slide = ({ children, className = "" }) => {
  return <div className={cn(`w-full h-full`, className)}>{children}</div>;
};

export default Slide;
