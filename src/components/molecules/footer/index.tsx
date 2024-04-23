import Logo from "@/assets/logo/logo-text.svg";
import SubscribeForm from "@/components/atom/subscribeForm";

const Footer = () => {
  return (
    <section>
      <footer className="flex flex-col lg:flex-row gap-[31px]  text-textSecondary">
        <div className="w-full lg:pr-[84px] lg:w-1/3">
          <img
            src={Logo}
            alt="nft marketplace's logo"
            className="lg:h-[32px] mb-[30px]"
          />
          <p className="text-base mb-[20px]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div>
            <p className="text-base">Join our community</p>
            <div className="flex"></div>
          </div>
        </div>
        <div className="flex-1">
          <p className="h5 mb-[25px] font-spaceMono text-text">Explore</p>
          <div className="text-base flex flex-col gap-[20px]">
            <p>Marketplace</p>
            <p>Rankings</p>
            <p>Connect a wallet</p>
          </div>
        </div>
        <div>
          <p className="h5 mb-[25px] font-spaceMono text-text">
            Join our weekly digest
          </p>
          <p className="text-base mb-[20px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <SubscribeForm />
        </div>
      </footer>
      <hr className="mt-[30px] my-[20px] border-backgroundSecondary" />
      <p className="text-caption text-textSecondary">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </section>
  );
};

export default Footer;
