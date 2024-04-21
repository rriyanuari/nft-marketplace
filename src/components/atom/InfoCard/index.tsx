import imgCart from "@/assets/infoCard/cart.png";

const InfoCard = () => {
  return (
    <div className="w-full bg-backgroundSecondary p-[20px] md:py-[10px] lg:px-[30px] rounded-[20px] flex md:flex-col items-center gap-[20px]">
      <img
        src={imgCart}
        alt="img-cart"
        className="h-[100px] w-[100px] md:h-[160px] md:w-[160px] lg:h-[250px] lg:w-[250px] object-cover"
      />
      <div className="text-center">
        <h5 className="font-workSans mb-[10px]">Space Walking</h5>
        <p className="text-base">
          Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
