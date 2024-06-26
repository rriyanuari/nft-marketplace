import { motion } from "framer-motion";

import ArtistCard from "@/components/atom/artistCard";
import Button from "@/components/atom/button";

import DATA_Creators from "@/data/creators.json";

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]"
        >
          {DATA_Creators.map((item, index) => (
            <ArtistCard creator={item} index={index + 1} key={item.name} />
          ))}
        </motion.div>

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
