import { SocialMediaLogos } from "@/app/utils/constants";
import "@/app/footer.scss";
import "@/app/headings.scss";
import Image from "next/image";
import { Button } from "../Button";
export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-headings-left-container">
          <div className="footer-logo-container">
            <div className="footer-logo"></div>
          </div>
          <div className="footer-headings-left-container-sub-heading1">
            <p>
              Your Source for Fraternity and
              <br />
              Sorority News & Reviews.
            </p>
            <p className="footer-headings-left-container-sub-heading2">
              Follow Us On
            </p>
          </div>
          <div>
            <div className="footer-headings-left-container-social-media-logos">
              {SocialMediaLogos.map((socialmedialogo, index) => (
                <div
                  key={index}
                  className="footer-headings-left-container-social-media-logos-logo"
                  style={{
                    backgroundImage: `url(${socialmedialogo.logo})`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <Button className="footer-headings-left-container-download-btn">
            Download App{" "}
            <div className="footer-headings-left-container-download-btn-logo"></div>
          </Button>
        </div>
        <div className="footer-headings-right-container">
          <div>
            <h2 className="footer-headings-right-container-resources">
              Site Links
            </h2>
            <div className="footer-headings-right-container-resources-site-links">
              <p>Universities</p>
              <p>Fraternities</p>
              <p>Sororities</p>
              <p>Rankings</p>
            </div>
          </div>
          <div>
            <h2 className="footer-headings-right-container-resources">
              Contact
            </h2>
            <div className="footer-headings-right-container-resources-contact">
              <p>Advertise</p>
              <p>Request</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div>
            <h2 className="footer-headings-right-container-resources">
              Resources
            </h2>
            <div className="footer-headings-right-container-resources-resources">
              <p>About Us</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Legal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2023 -{" "}
        <span style={{ color: "rgba(255, 87, 87, 1)" }}>rushlinkapp.com</span>
      </div>
    </div>
  );
};
