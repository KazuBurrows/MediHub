import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MediHub</div>
      <ul style={navListStyle}>
        <li style={navItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/matrix" style={linkStyle}>Schedule</Link>
        </li>
      </ul>
    </nav>
  );
};

// Styles
const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#0073ea",
  padding: "0.75rem 2rem",
  color: "#fff",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,              // ✅ ensures it stretches exactly to viewport edges
  width: "100%",
  boxSizing: "border-box", // ✅ include padding in width calculation
  zIndex: 1000,
};

const logoStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 700,
};

const navListStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  gap: "1.5rem",
  margin: 0,
  padding: 0,
};

const navItemStyle: React.CSSProperties = {
  fontSize: "1rem",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
};

export default NavBar;