import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="content">
      <div className="navbar-container">
        <div className="navbar-home-btn">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-credits-btn">
          <Link to="/credits">Credits</Link>
        </div>
      </div>
    </div>
  );
}
