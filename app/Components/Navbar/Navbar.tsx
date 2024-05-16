import { NavbarHeadings } from "@/app/utils/constants";
import { Button } from "../Button/Button";
import "@/app/navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo"></div>
      <div className="navbar-headings">
        {NavbarHeadings?.map((heading, index) => (
          <div key={index} className="navbar-heading">
            {heading.heading}
          </div>
        ))}
      </div>
      <div>
        <Button className="navbar-contactUs-btn"> Contact Us </Button>
      </div>
    </div>
  );
};
