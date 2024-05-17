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
      <div className="static-news-image-container">
        <div className="static-news-image">
          {StaticNewsPageImage.map((staticImage, index) => (
            <div key={index}>
              <Image
                src={staticImage.image}
                width={1081}
                height={405}
                alt="news image"
              />
              <h2>{staticImage.name}</h2>
              <h2>{staticImage.date}</h2>
              <h2>{staticImage.newsArticle}</h2>
            </div>
          ))}
        </div>
        <div className="slider-news-images">
          {NewsImages.map((newsImage, index) => (
            <div key={index}>
              <Image
                src={newsImage.image}
                width={524}
                height={441}
                alt="news image"
              />
              <h2>{newsImage.name}</h2>
              <h2>{newsImage.date}</h2>
              <h2>{newsImage.newsArticle}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
