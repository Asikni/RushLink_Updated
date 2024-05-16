export const PostsPage = () => {
  return (
    <div>
      <h1 className="posts-page-heading">
        <span>Trending</span> Posts
      </h1>

      <div className="sub-heading-container">
        <div className="posts-page-subheading">
          <p>Rate</p>
          <p className="dot"></p>
          <p>Review</p>
          <p className="dot"></p>
          <p>Rank</p>
        </div>
      </div>
      <div className="cardsContainer">
        <div className="bgDotsImageMobile2"></div>
        <div className="bgEllipseImage"></div>
        {/* <Cards /> */}
      </div>
    </div>
  );
};
