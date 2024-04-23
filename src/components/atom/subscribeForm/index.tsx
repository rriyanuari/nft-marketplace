import Button from "../button";

const SubscribeForm = () => {
  return (
    <div className="lg:bg-white p-0 rounded-[20px] flex flex-col gap-[16px] lg:gap-0 lg:flex-row justify-between">
      <input
        type="text"
        className="h-[46px] p-[20px] rounded-[20px] focus:outline-none text-background text-base placeholder:text-background"
        placeholder="Enter your email here"
      />
      <Button
        size="primary"
        variant="filled"
        className="h-[46px] lg:h-auto text-text"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeForm;
