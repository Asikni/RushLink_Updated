import { PostsCard } from "./Compoents/PostsCard";

export const PostsPage = () => {
  return (
    <div>
      <h1 className="posts-page-heading">
        <span className="posts-page-heading-trending">Trending</span> Posts
      </h1>

      <div className="posts-page-sub-heading-container">
        <div className="posts-page-sub-heading">
          <p>Rate</p>
          <p className="dot"></p>
          <p>Review</p>
          <p className="dot"></p>
          <p>Rank</p>
        </div>
      </div>
      <div className="cards-container">
        <div className="bgDotsImageMobile2"></div>
        <div className="bgEllipseImage"></div>
        <PostsCard />
      </div>
    </div>
  );
};
