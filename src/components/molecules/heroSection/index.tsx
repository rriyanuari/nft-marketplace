import Button from "@/components/atom/button";
import HighlightedNFT from "@/components/atom/highlightedNFT";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-[40px] md:gap-[30px]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <h1 className="h4 md:h3 lg:h1 font-workSans capitalize">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-base lg:text-body">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>

        <div className="md:hidden">
          <HighlightedNFT />
        </div>

        <Button variant="filled" size="primary" className="w-full md:w-[224px]">
          Get Started
        </Button>

        <div className="grid grid-cols-3">
          <div className="text-base">
            <p className="h5 lg:h4">240k+</p>
            <p>Total Sales</p>
          </div>
          <div className="text-base">
            <p className="h5 lg:h4">240k+</p>
            <p>Total Sales</p>
          </div>
          <div className="text-base">
            <p className="h5 lg:h4">240k+</p>
            <p>Total Sales</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-[330px] lg:w-full">
        <HighlightedNFT />
      </div>
    </section>
  );
};

export default HeroSection;
