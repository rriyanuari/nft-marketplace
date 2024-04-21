import ArtistCard from "@/components/atom/artistCard";
import Button from "@/components/atom/button";

const TopCreatorSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px] md:gap-[20px]">
            <h1 className="h4 lg:h3 font-workSans capitalize">Top Creator</h1>
            <p className="text-base lg:text-body">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Button
            variant="outline"
            size="primary"
            className="hidden lg:block w-full md:w-[224px]"
          >
            Check out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <ArtistCard />
          ))}
        </div>

        <Button
          variant="filled"
          size="primary"
          className="lg:hidden w-full md:w-[224px]"
        >
          Check out
        </Button>
      </div>
    </section>
  );
};

export default TopCreatorSection;
