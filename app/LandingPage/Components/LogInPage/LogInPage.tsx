import { Button } from "@/app/Components/Button";
import "@/app/globals.scss";
export const LogInPage = () => {
  return (
    <div className="log-in">
      <div className="log-in-component">
        <div className="log-in-component-bg-image">
          <div className="log-in-component-bg-image-content">
            <h1 className="log-in-heading">Didn&apos;t find your school?</h1>
            <h2 className="log-in-sub-heading">
              Request for your school to be featured on
            </h2>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button className="log-in-btn">Login</Button>
            </div>
          </div>
        </div>
        <div className="log-in-bg-image2"></div>
        <div className="bgLogoone">
          <div className="bgLogo"></div>
        </div>
      </div>
    </div>
  );
};
