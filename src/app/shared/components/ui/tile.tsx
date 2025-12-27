// src/components/shared/Tile.tsx
import { Link } from "react-router-dom";
import "../../styles/tile.css";

interface TileProps {
  to: string;           // route path
  title: string;
  description?: string;
}

export function Tile({ to, title, description }: TileProps) {
  return (
    <Link className="tile" to={to}>
      <h2 className="tile-title">{title}</h2>
      {description && <p className="tile-description">{description}</p>}
    </Link>
  );
}