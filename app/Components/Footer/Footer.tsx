import { SocialMediaLogos } from "@/app/utils/constants";
import "@/app/footer.scss";
import "@/app/headings.scss";
import Image from "next/image";
import { Button } from "../Button";
export const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer">
          <div className="footer-headings">
            <div className="footer-logo-container">
              <div className="footer-logo"></div>
            </div>
            <div className="footer-sub-heading">
              <p>
                Your Source for Fraternity and
                <br />
                Sorority News & Reviews.
              </p>
            </div>
            <div>
              <div className="footer-sub-heading-social-media-container">
                <p className="footer-sub-heading-social-media">Follow Us On</p>
                <div className="social-media-logos">
                  {SocialMediaLogos.map((socialmedialogo, index) => (
                    <div key={index}>
                      <Image
                        src={socialmedialogo.logo}
                        width={36}
                        height={36}
                        alt="social media logo"
                        className="social-media-logo-footer"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Button className="download-btn">
                Download App <div className="download-btn-logo"></div>
              </Button>
            </div>
          </div>
          <div className="footer-details">
            <div>
              <div className="footer-resources">Site Links</div>
              <div className="footer-resources-site-links">
                <div>Universities</div>
                <div>Fraternities</div>
                <div>Sororities</div>
                <div>Rankings</div>
              </div>
            </div>
            <div>
              <div className="footer-resources">Contact</div>
              <div className="footer-resources-contact">
                <p>Advertise</p>
                <p>Request</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div>
              <div className="footer-resources">Resources</div>
              <div className="footer-resources-resources">
                <p>About Us</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Legal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">© 2023 - Rushlink.com</div>
      </div>
    </div>
  );
};
