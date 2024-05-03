import { motion } from "framer-motion";
import { Tcreator } from "@/types/creator";

const ArtistCard = (props: { creator: Tcreator; index: number }) => {
  const { creator, index } = props;

  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.6 }}
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
      }}
      whileInView={{
        opacity: 1,
        scale: [0.8, 1.3, 1],
        transition: {
          type: "spring",
        },
      }}
      viewport={{ once: false }}
      className="bg-backgroundSecondary p-[20px] rounded-[20px] flex items-center gap-2 lg:flex-col lg:text-center relative"
    >
      <div className="absolute top-[15px] left-[15px] w-[30px] h-[30px] rounded-full bg-background text-captionText text-base flex justify-center items-center">
        {index}
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
    </motion.button>
  );
};

export default ArtistCard;
