import { NavbarHeadings } from "@/app/utils/constants";
import { Button } from "../Button/Button";
import "@/app/navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-logo"></div>
      <div className="navbar-container-headings">
        {NavbarHeadings?.map((heading, index) => (
          <div key={index} className="navbar-container-heading">
            {heading.heading}
          </div>
        ))}
      </div>
      <div>
        <Button className="navbar-container-contactUs-btn"> Contact Us </Button>
      </div>
    </div>
  );
};
