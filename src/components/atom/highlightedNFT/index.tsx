const HighlightedNFT = () => {
  return (
    <div className="w-full">
      <div className="rounded-t-[20px] overflow-hidden">
        <img
          src="./assets/collections/collection1.jpg"
          alt="NFT collection"
          className="w-full object-cover"
        />
      </div>
      <div className="bg-backgroundSecondary p-[20px] rounded-b-[20px]">
        <h5 className="font-workSans mb-[10px]">Space Walking</h5>
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

export default HighlightedNFT;
