import { HomePage } from "./Components/HomePage";
import { LogInPage } from "./Components/LogInPage";
import { PostsPage } from "./Components/PostsPage";

export const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <PostsPage />
      <LogInPage />
    </div>
  );
};
