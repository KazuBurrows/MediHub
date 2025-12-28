import { Link } from "react-router-dom";
import "../../styles/button.css";

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
}

export function Button({
  to,
  onClick,
  children,
  variant = "secondary",
  showArrow = true,
}: ButtonProps) {
  const className = `mh-btn mh-btn-${variant}`;

  const Arrow = showArrow ? (
    <span className="mh-btn-arrow" aria-hidden="true">
      →
    </span>
  ) : null;

  if (to) {
    return (
      <Link to={to} className={className}>
        <span className="mh-btn-label">{children}</span>
        {Arrow}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      <span className="mh-btn-label">{children}</span>
      {Arrow}
    </button>
  );
}