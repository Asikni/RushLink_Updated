import { CardsData } from "@/app/utils/constants";

export const PostsCard = () => {
  return (
    <div className="cards-inner-container">
      <div className="cards">
        {CardsData.map((card, index) => (
          <div className="individual-card" key={index}>
            <div className="university-logo">{card.universityLogo}</div>
            <div className="university-name">{card.universityName}</div>
            <div className="post-to">{card.postTo}</div>
            <div className="post-by">{card.postBy}</div>
            <div className="time-ago">{card.timeAgo}</div>
            <div className="card-top-heading">{card.cardHeading}</div>
            <div className="card-comment">{card.cardComments}</div>
            <div className="card-footer">
              <div className="by-date">
                <div>{card.cardBy}</div>
                <div>{card.DateTime}</div>
              </div>
              <div className="commentsData">
                <div>
                  <Image
                    className="viewsLogo"
                    src={card.ViewsLogo}
                    width={28.12}
                    height={20.63}
                    alt="views logo"
                  />
                </div>
                <div className="views">{card.Views}</div>
                <div>
                  <Image
                    className="likesLogo"
                    src={card.LikesLogo}
                    width={28.12}
                    height={20.63}
                    alt="likes logo"
                  />
                </div>
                <div className="likes">{card.Likes}</div>
                <div>
                  <Image
                    className="dislikesLogo"
                    src={card.DislikesLogo}
                    width={28.12}
                    height={20.63}
                    alt="dislikes logo"
                  />
                </div>
                <div className="dislikes">{card.Dislikes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
