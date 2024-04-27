import CategoryCard from "@/components/atom/categoryCard";

import DATA_Categories from "@/data/categories.json";

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
          {DATA_Categories.map((item) => (
            <CategoryCard category={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategoriesSection;
