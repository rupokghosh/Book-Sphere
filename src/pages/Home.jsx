import HeroSection from "../components/HeroSection";
import TrendingBooks from "../components/TrendingBooks";
import Categories from "../components/Categories";
import BestSellersThisWeek from "../components/BestSellersThisWeek";
import LatestReleases from "../components/LatestReleases";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <h1 className="bold text-2xl text-center mt-4">Trending Books</h1>
      <TrendingBooks />
      <Categories />
      <BestSellersThisWeek />
      <LatestReleases />
    </div>
  );
};

export default Home;
