import HeroSection from "@/components/molecules/heroSection";
import Navigation from "@/components/molecules/navigation";
import TrendingCollectionSection from "./components/molecules/trendingCollectionSection";
import TopCreatorSection from "./components/molecules/topCreatorSection";
import BrowseCategoriesSection from "./components/molecules/browseCategoriesSection";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container">
        <Navigation />
        <HeroSection />
        <TrendingCollectionSection />
        <TopCreatorSection />
        <BrowseCategoriesSection />
      </div>
    </div>
  );
}

export default App;
