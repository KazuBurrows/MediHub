import { Link } from "react-router-dom";
import { useUser } from "../../../features/auth/hooks/useUser";
import { LogoutButton } from "../../../features/auth/components/LogoutButton";
import "../../styles/Navigation.css";

export function Navigation() {
  const { user } = useUser();

  return (
    <header className="main-header">
      {/* Top bar: logo + user info */}
      <div className="main-nav">
        <div className="main-nav-inner">
          <div className="main-nav-logo">
            <Link to="/">MediHub</Link>
          </div>

          <div className="main-nav-user">
            {user && <span className="user-name">{user.name}</span>}
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Secondary nav: section links */}
      <nav className="sub-nav" aria-label="Main navigation">
        <div className="sub-nav-inner">
          <Link to="/dashboards">Dashboard</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/facilities">Facilities</Link>
        </div>
      </nav>
    </header>

  );
}