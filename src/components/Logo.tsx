import { Route } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="gradient-primary p-2 rounded-xl shadow-md">
        <Route className={`${sizes[size]} w-auto text-primary-foreground`} />
      </div>
      <span className={`${textSizes[size]} font-bold text-foreground`}>
        Next<span className="text-gradient">Path</span>
      </span>
    </div>
  );
};
