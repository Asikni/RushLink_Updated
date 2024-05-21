import { TopFSLogos } from "@/app/utils/constants";
import { Button } from "@/app/Components/Button";
export const RankingsPage = () => {
  return (
    <div className="rankings-page">
      <h1 className="rankings-page-heading">Rankings</h1>
      <h2 className="rankings-page-sub-heading-one">
        See Rankings of Fraternities and Sororities in Rushlink
      </h2>
      <h2 className="rankings-page-sub-heading-two">
        Top 5 Largest Fraternities & Sororities (Excluding Cultural & Honors
        Fraternities)
      </h2>
      <div className="rankings-page-rankings-fs-logos-container">
        {TopFSLogos.map((fsLogo, index) => (
          <div
            key={index}
            className="rankings-page-rankings-fs-logos-container-logos-name"
          >
            <div
              className="rankings-page-rankings-fs-logos-container-logos"
              style={{ backgroundImage: `url(${fsLogo.logo})` }}
            ></div>
            <h2 className="rankings-page-rankings-fs-logos-container-names">
              {" "}
              {fsLogo.name}
            </h2>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button className="rankings-page-btn">View All</Button>
      </div>
    </div>
  );
};
