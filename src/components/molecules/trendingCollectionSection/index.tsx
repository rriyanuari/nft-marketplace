import CollectionCard from "@/components/atom/collectionCard";

const TrendingCollectionSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <h1 className="h4 lg:h3 font-workSans capitalize">
            Trending Collection
          </h1>
          <p className="text-base lg:text-body">
            Checkout our weekly updated trending collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
      </div>
    </section>
  );
};

export default TrendingCollectionSection;
