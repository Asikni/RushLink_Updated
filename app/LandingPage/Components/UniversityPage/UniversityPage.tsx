import { UniversitiesOrganizationsLogos } from "@/app/utils/constants";
import Image from "next/image";
export const UniversityPage = () => {
  return (
    <div>
      <h1 className="university-page-heading">
        Across all Universities and <br /> Organization Chapters
      </h1>
      <div className="university-page-logos">
        {UniversitiesOrganizationsLogos.map((logo) => (
          <div>
            <Image
              src={logo.universityorganizationlogo}
              width={233}
              height={217}
              alt="university organization logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
