import { motion } from "framer-motion";
import { TtrendingCollection } from "@/types/trendingCollection";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CollectionCard = (props: { collection: TtrendingCollection }) => {
  const { collection } = props;

  return (
    <div className="w-full flex flex-col gap-[15px]">
      <motion.button
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: [0.9, 1.3, 1],
          transition: {
            type: "spring",
          },
        }}
        viewport={{ once: false }}
        className="rounded-[20px] h-[330px] overflow-hidden"
      >
        <LazyLoadImage
          src={`./assets/collections/${collection.img}`}
          alt="NFT collection"
          className="w-full h-full object-cover rounded-[20px]"
        />
      </motion.button>
      <div className="grid grid-cols-3 gap-[15px]">
        {[1, 2, 3].map((item) => (
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: [0.9, 1.3, 1],
              transition: {
                type: "spring",
              },
            }}
            viewport={{ once: false }}
            key={item}
            className="rounded-[20px] h-[100px] overflow-hidden"
          >
            <LazyLoadImage
              src={`./assets/collections/${collection.img}`}
              alt="NFT collection"
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      <div>
        <p className="h5">{collection.title}</p>
        <div className="flex items-center gap-2">
          <LazyLoadImage
            src={`./assets/creators/${collection.creator.img}`}
            alt="NFT collection"
            className="h-[24px] w-[24px] object-cover rounded-full"
          />
          <p className="text-base">{collection.creator.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
