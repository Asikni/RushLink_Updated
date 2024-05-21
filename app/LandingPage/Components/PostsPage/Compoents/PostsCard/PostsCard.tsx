import { CardsData } from "@/app/utils/constants";
import Image from "next/image";

export const PostsCard = () => {
  return (
    <div className="cards-inner-container">
      <div className="cards-inner-container-all-cards">
        {CardsData.map((card, index) => (
          <div className="individual-card" key={index}>
            <div className="individual-card-top-details">
              <div className="individual-card-top-details-university-logo">
                <Image
                  src={card.universityLogo}
                  width={52}
                  height={52}
                  alt="logo of the university"
                />
              </div>
              <div>
                <div className="individual-card-top-details-post-meta">
                  <p className="post-meta-post-by">{card.postBy}</p>
                  <p className="university-post-container-university-name">
                    {card.universityName}
                  </p>
                </div>
                <div className="individual-card-top-details-tags">
                  <p>{card.tagOne}</p>
                  <p>{card.tagTwo}</p>
                  <p>{card.tagThree}</p>
                  <p>{card.others}</p>
                </div>
              </div>
            </div>
            {/* <h2 className="card-top-heading">{card.cardHeading}</h2> */}
            <h3 className="card-comment">{card.cardComments}</h3>
            <div className="card-footer">
              <div className="comments-data">
                <div className="comments-data-left-container">
                  <div
                    className="comments-logo"
                    style={{ backgroundImage: `url(${card.commentsLogo})` }}
                  ></div>
                  <p className="comments">{card.comments}</p>

                  <div
                    className="views-logo"
                    style={{ backgroundImage: `url(${card.viewsLogo})` }}
                  ></div>
                  <p className="views">{card.views}</p>

                  <div
                    className="shared-posts-logo"
                    style={{ backgroundImage: `url(${card.sharedPostsLogo})` }}
                  ></div>
                  <p className="shared-posts">{card.sharedPosts}</p>

                  <div
                    className="saved-posts-logo"
                    style={{ backgroundImage: `url(${card.savedPostsLogo})` }}
                  ></div>
                  <p className="saved-posts">{card.savedPosts}</p>
                </div>
                <div className="comments-data-right-container">
                  {" "}
                  <div
                    className="likes-logo"
                    style={{ backgroundImage: `url(${card.likesLogo})` }}
                  ></div>
                  <p className="likes">{card.likes}</p>
                  <div
                    className="dislikes-logo"
                    style={{ backgroundImage: `url(${card.dislikesLogo})` }}
                  ></div>
                  <p className="dislikes">{card.dislikes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
