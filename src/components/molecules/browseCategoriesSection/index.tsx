import CategoryCard from "@/components/atom/categoryCard";

const BrowseCategoriesSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px] md:gap-[20px]">
            <h1 className="h4 lg:h3 font-workSans capitalize">
              Browse Categories
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <CategoryCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategoriesSection;
