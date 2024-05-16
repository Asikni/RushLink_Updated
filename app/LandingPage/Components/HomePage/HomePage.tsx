import { Button } from "@/app/Components/Button";
import { SearchBar } from "./Components/SearchBar/SeachBar";

export const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <h1 className="hero-heading">
          Your Source for Fraternity and
          <br />
          Sorority <span>News</span> & <span>Reviews.</span>
        </h1>
        <p className="hero-sub-heading">
          Rate, Review, and Rank fraternity and sorority chapters
        </p>
        <div className="search-bar-homepage">
          <SearchBar
            placeHolder="Search For Organizations"
            className="search-bar-homepage-input"
          />
          <Button className="search-bar-homepage-icon"></Button>
        </div>
        <Button className="search-bar-homepage-download-btn">
          Download App <div className="download-btn-logo"></div>
        </Button>
      </div>
    </div>
  );
};
