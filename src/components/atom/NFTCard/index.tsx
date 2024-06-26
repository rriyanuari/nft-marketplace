import { TtrendingCollection } from "@/types/trendingCollection";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NFTCard = (props: { nft: TtrendingCollection }) => {
  const { nft } = props;

  return (
    <div className="w-full">
      <div className="rounded-t-[20px] overflow-hidden">
        <LazyLoadImage
          src={`./assets/NFTs/${nft.img}`}
          alt="NFT collection"
          className="w-full object-cover"
        />
      </div>
      <div className="bg-backgroundSecondary p-[20px] lg:px-[30px] rounded-b-[20px]">
        <h5 className="font-workSans mb-[10px]">{nft.title}</h5>
        <div className="flex items-center gap-2">
          <LazyLoadImage
            src={`./assets/creators/${nft.creator.img}`}
            alt="NFT collection"
            className="h-[24px] w-[24px] object-cover rounded-full"
          />
          <p className="text-base">{nft.creator.name}</p>
        </div>
        <div className="mt-[25px] flex justify-between">
          <p className="text-base text-captionText">
            Price <span className="text-text mt-[8px] block">34.53 ETH</span>
          </p>

          <p className="text-base text-captionText">
            Highest Bid{" "}
            <span className="text-text mt-[8px] block">34.53 ETH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
