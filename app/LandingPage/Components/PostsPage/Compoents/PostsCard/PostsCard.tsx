import { CardsData } from "@/app/utils/constants";
import Image from "next/image";

export const PostsCard = () => {
  return (
    <div className="cards-inner-container">
      <div className="cards">
        {CardsData.map((card, index) => (
          <div className="individual-card" key={index}>
            <div className="card-top-details">
              <div className="university-logo">
                <Image
                  src={card.universityLogo}
                  width={52}
                  height={52}
                  alt="logo of the university"
                />
              </div>
              <div>
                <div className="card-top-details-post-meta">
                  <p className="post-meta-post-by">{card.postBy}</p>
                  <p className="university-post-container-university-name">
                    {card.universityName}
                  </p>
                </div>
              </div>
            </div>
            <h2 className="card-top-heading">{card.cardHeading}</h2>
            <h3 className="card-comment">{card.cardComments}</h3>
            <div className="card-footer">
              <div className="by-date">
                <p>{card.cardBy}</p>
                <p>{card.dateTime}</p>
              </div>
              <div className="comments-data">
                <div>
                  <Image
                    className="viewsLogo"
                    src={card.viewsLogo}
                    width={28}
                    height={21}
                    alt="views logo"
                  />
                </div>
                <p className="views">{card.views}</p>
                <div>
                  <Image
                    className="likes-logo"
                    src={card.likesLogo}
                    width={28}
                    height={21}
                    alt="likes logo"
                  />
                </div>
                <p className="likes">{card.likes}</p>
                <div>
                  <Image
                    className="dislikes-logo"
                    src={card.dislikesLogo}
                    width={28}
                    height={21}
                    alt="dislikes logo"
                  />
                </div>
                <p className="dislikes">{card.dislikes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
