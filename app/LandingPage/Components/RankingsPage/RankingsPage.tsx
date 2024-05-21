import { TopFSLogos } from "@/app/utils/constants";
import Image from "next/image";
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
          <div key={index}>
            <Image
              src={fsLogo.logo}
              width={233}
              height={217}
              alt="fraternities and sororities logo"
            />
            <h2>{fsLogo.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
