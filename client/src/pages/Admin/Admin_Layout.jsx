import "./Admin_Layout.css";
import { Outlet, Link, NavLink } from "react-router-dom";
// import logo from "../src/assets/logo header.png";
import logo from "/src/assets/logo header.png";
import Admin_img from "/src/assets/admin-pic.png";


function Admin_Layout() {
  return (
    <div className="Page-Layout">
      <div className="Header-Section">
        <h1>Galaxy Cinema</h1>
        <div className="Admin-img-n-name">
          <img src={Admin_img} alt="Admin" className="Admin-img" />
          <div className="admin-name">
            <span>Jhon Doe</span>
          </div>
        </div>
      </div>

      <div className="Page_Body">
        <div className="Left-Side-Navbar">
          <ul>
            <li>
              <NavLink
                to="/admin"
                style={({ isActive }) => {
                  return { background: isActive ? "#D80000" : "" };
                }}
                className="admin-nav-acive"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/premiere"
                style={({ isActive }) => {
                  return { background: isActive ? "#D80000" : "" };
                }}
                className="admin-nav-acive"
              >
                Premiere
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upcoming"
                style={({ isActive }) => {
                  return { background: isActive ? "#D80000" : "" };
                }}
                className="admin-nav-acive"
              >
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                style={({ isActive }) => {
                  return { background: isActive ? "#D80000" : "" };
                }}
                className="admin-nav-acive"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Righ-Side-Content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin_Layout;
