import { StaticNewsPageImage } from "@/app/utils/constants";
import { NewsImages } from "@/app/utils/constants";
import Image from "next/image";
export const NewsPage = () => {
  return (
    <div className="news-page">
      <h1 className="news-page-heading">News</h1>
      <h2 className="news-page-subheading">
        Discover Insights about Fraternities and Sororrities Around The Globe
      </h2>
      <div className="news-page-image-content-container">
        <div className="news-page-static-image-container">
          {StaticNewsPageImage.map((staticImage, index) => (
            <div key={index} className="static-news-content-container">
              <div
                style={{ backgroundImage: `url(${staticImage.image})` }}
                className="news-page-static-image-container-image"
              >
                {" "}
              </div>
              <div
                className="news-page-static-image-container-name-date"
                style={{ display: "flex", gap: "10px" }}
              >
                <p>{staticImage.name}</p>
                <p>{staticImage.date}</p>
              </div>
              <p className="news-page-static-image-container-newsarticle">
                {staticImage.newsArticle}
              </p>
            </div>
          ))}
        </div>

        <div className="news-page-slider-news-images">
          {NewsImages.map((newsImage, index) => (
            <div
              key={index}
              className="news-page-slider-news-images-image"
              style={{ backgroundImage: `url(${newsImage.image})` }}
            >
              {/* <Image
                src={newsImage.image}
                width={524}
                height={441}
                alt="news image"
              /> */}
              <div
                className="news-page-slider-news-images-name-date"
                style={{ display: "flex", gap: "10px" }}
              >
                <p>{newsImage.name}</p>
                <p>{newsImage.date}</p>
              </div>
              <h2 className="news-page-slider-news-images-newsarticle">
                {" "}
                {newsImage.newsArticle}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
