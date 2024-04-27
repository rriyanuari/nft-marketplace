import { Tcreator } from "@/types/creator";

const ArtistCard = (props: { creator: Tcreator }) => {
  const { creator } = props;

  return (
    <div className="bg-backgroundSecondary p-[20px] rounded-[20px] flex items-center gap-2 lg:flex-col lg:text-center relative">
      <div className="absolute top-[15px] left-[15px] w-[30px] h-[30px] rounded-full bg-background text-captionText text-base flex justify-center items-center">
        1
      </div>
      <img
        src={`./assets/creators/${creator.img}`}
        alt="NFT collection"
        className="h-[60px] w-[60px] lg:h-[120px] lg:w-[120px] object-cover rounded-full"
      />
      <div>
        <p className="h5">{creator.name}</p>
        <p className="text-base text-captionText">
          Total Sales:{" "}
          <span className="text-text">{creator.totalSales} ETH</span>
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
