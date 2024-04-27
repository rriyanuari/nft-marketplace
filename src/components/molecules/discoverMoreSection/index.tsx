import NFTCard from "@/components/atom/NFTCard";
import Button from "@/components/atom/button";

import DATA_NFT from "@/data/NFTs.json";

const DiscoverMoreSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px] md:gap-[20px]">
            <h1 className="h4 lg:h3 font-workSans capitalize">
              Discover More NFTs
            </h1>
            <p className="text-base lg:text-body">Explore new trending NFTs</p>
          </div>
          <Button
            variant="outline"
            size="primary"
            className="hidden lg:block w-full md:w-[224px]"
          >
            View more
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {DATA_NFT.map((item) => (
            <NFTCard nft={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverMoreSection;
