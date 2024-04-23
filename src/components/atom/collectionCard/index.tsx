const CollectionCard = () => {
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <div className="rounded-[20px] h-[330px] overflow-hidden">
        <img
          src="./assets/collections/collection1.jpg"
          alt="NFT collection"
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>
      <div className="grid grid-cols-3 gap-[15px]">
        <div className="rounded-[20px] h-[100px] overflow-hidden">
          <img
            src="./assets/collections/collection1.jpg"
            alt="NFT collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-[20px] h-[100px] overflow-hidden">
          <img
            src="./assets/collections/collection1.jpg"
            alt="NFT collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-[20px] h-[100px] bg-callToAction flex items-center justify-center">
          <p className="h5 font-spaceMono">1025+</p>
        </div>
      </div>

      <div>
        <p className="h5">DSGN Animals</p>
        <div className="flex items-center gap-2">
          <img
            src="./assets/collections/collection1.jpg"
            alt="NFT collection"
            className="h-[24px] w-[24px] object-cover rounded-full"
          />
          <p className="text-base">Animakid</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
