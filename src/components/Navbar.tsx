import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from "../routes/route-container";
import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <span>Hot Discount</span>
        <div>
          <ul>
            <li>
              <FacebookOutlined />
            </li>
            <li>
              <InstagramOutlined />
            </li>
            <li>
              <TikTokOutlined />
            </li>
            <li>
              <YoutubeOutlined />
            </li>
          </ul>
          <input type="text" placeholder="Enter your search" />
        </div>
      </div>
      <div className="navbar-fixed">
        <img src={logo} alt="" />
        <ul>
          {routes.map(({ path, text }) => (
            <NavLink key={path} to={path}>
              <li>{text}</li>
            </NavLink>
          ))}
        </ul>
        <button>Book Now</button>
      </div>
    </div>
  );
}
