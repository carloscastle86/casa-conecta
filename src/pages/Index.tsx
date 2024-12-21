import { Navbar } from "@/components/Navbar";
import { SearchHero } from "@/components/SearchHero";
import { FeaturedProperties } from "@/components/FeaturedProperties";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SearchHero />
      <FeaturedProperties />
    </div>
  );
};

export default Index;