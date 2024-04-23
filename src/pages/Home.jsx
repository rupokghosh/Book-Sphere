import HeroSection from "../components/HeroSection";
import TrendingBooks from "../components/TrendingBooks";
import Categories from "../components/Categories";
import BestSellersThisWeek from "../components/BestSellersThisWeek";
import LatestReleases from "../components/LatestReleases";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrendingBooks />
      <Categories />
      <BestSellersThisWeek />
      <LatestReleases />
    </div>
  );
};

export default Home;
