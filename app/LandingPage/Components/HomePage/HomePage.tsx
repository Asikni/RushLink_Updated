import { Button } from "@/app/Components/Button";
import { SearchBar } from "./Components/SearchBar/SeachBar";

export const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <h1 className="homepage-container-hero-heading">
          Your Source for Fraternity and
          <br />
          Sorority{" "}
          <span className="homepage-container-hero-heading-news">
            News
          </span> &{" "}
          <span className="homepage-container-hero-heading-reviews">
            Reviews.
          </span>
        </h1>
        <p className="homepage-container-hero-sub-heading">
          Rate, Review, and Rank fraternity and sorority chapters
        </p>
        <div className="homepage-container-search-bar">
          <SearchBar
            placeHolder="Search For Organizations"
            className="homepage-container-search-bar-input"
          />
          <Button className="homepage-container-search-bar-icon"></Button>
        </div>
        <Button className="homepage-container-download-btn">
          Download App{" "}
          <div className="homepage-container-download-btn-logo"></div>
        </Button>
      </div>
    </div>
  );
};
