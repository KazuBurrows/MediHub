import "../../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} MediHub — New Zealand Health
    </footer>
  );
}