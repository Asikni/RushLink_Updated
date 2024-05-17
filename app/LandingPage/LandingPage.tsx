import { HomePage } from "./Components/HomePage";
import { LogInPage } from "./Components/LogInPage";
import { NewsPage } from "./Components/NewsPage";
import { PostsPage } from "./Components/PostsPage";
import { UniversityPage } from "./Components/UniversityPage";

export const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <PostsPage />
      <UniversityPage />
      <NewsPage />
      <LogInPage />
    </div>
  );
};
