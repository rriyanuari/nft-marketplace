import SubscribeForm from "@/components/atom/subscribeForm";

const SubscribeWidgetSection = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="bg-backgroundSecondary rounded-[20px] px-[30px] py-[40px] xl:p-[60px]">
          <div className="flex flex-col md:flex-row items-center gap-[30px] xl:gap-[80px]">
            <img
              src="./assets/collections/collection1.jpg"
              alt="NFT collection"
              className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] xl:w-[425px] xl:h-[310px] object-cover rounded-[20px]"
            />
            <div className="capitalize">
              <p className="font-workSans h4 xl:h3 mb-[10px]">
                Join our weekly digest
              </p>
              <p className="text-base xl:text-body mb-[40px]">
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeWidgetSection;
