import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  //Navbar component that appears on every page.
  const navigate = useNavigate();
  return (
    <header className="navbar-background">
      <h1 className="navbar-title">WVU Soil Testing Lab</h1>
      <ul className="navbar">
        <li className="navbar-item">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/newSubmission" className="navbar-item">
            New Submission
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="items" className="navbar-item">
            Submit Submission Forms
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className="navbar-item"
            to=""
            onClick={() => {
              localStorage.removeItem("shop_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </header>
  );
};
