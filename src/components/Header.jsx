import { NavLink } from "react-router-dom";
import "./Header.css";
import { LogOutButton } from "./LogOutButton";
import ProfilePhoto from '../components/Images/ProfilePhoto.png';

export const Header = () => {
  return (
    <div className="header">
      <div>
        <NavLink to="/">
          <h1 className="logo">IMAGINARIUM</h1>
        </NavLink>
      </div>
      <div className="navBar">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
        <NavLink to="/about">About</NavLink>
        <LogOutButton/>
        <img src={ProfilePhoto} alt="Profile Picture"/>
      </div>
    </div>
  );
};
