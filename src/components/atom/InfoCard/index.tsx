import imgCart from "@/assets/infoCard/cart.png";

const InfoCard = () => {
  return (
    <div className="w-full bg-backgroundSecondary py-0 p-[20px] md:py-[10px] lg:py-[20px] lg:px-[30px] rounded-[20px] flex md:flex-col items-center gap-[20px]">
      <img
        src={imgCart}
        alt="img-cart"
        className="h-[100px] w-[100px] md:h-[160px] md:w-[160px] lg:h-[250px] lg:w-[250px] object-cover"
      />
      <div className="md:text-center mt-[20px] mb-[30px]">
        <p className="font-workSans text-button lg:h5 mb-[10px]">
          Space Walking
        </p>
        <p className="text-caption lg:text-base">
          Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
