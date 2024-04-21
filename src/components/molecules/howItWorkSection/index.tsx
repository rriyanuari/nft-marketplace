import InfoCard from "@/components/atom/InfoCard";

const HowItWorkSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px] md:gap-[20px]">
            <h1 className="h4 lg:h3 font-workSans capitalize">How it works</h1>
            <p className="text-base lg:text-body">
              Find out how to get started
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
