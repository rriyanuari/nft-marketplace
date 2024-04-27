import paintBrush from "@/assets/icons/categories/PaintBrush.svg";
import { Tcategories } from "@/types/categories";

const CategoryCard = (props: { category: Tcategories }) => {
  const { category } = props;

  return (
    <div className="w-full">
      <div className="relative w-full rounded-t-[20px] overflow-hidden">
        <img
          src={`./assets/categories/${category.img}`}
          alt="NFT category"
          className="w-full object-cover relative"
        />
        <div className="absolute top-0 w-full h-full backdrop-blur-md bg-white/10 flex justify-center items-center">
          <img src={paintBrush} alt="category icon" />
        </div>
      </div>
      <div className="bg-backgroundSecondary p-[20px] lg:px-[30px] rounded-b-[20px]">
        <p className="text-button md:h5 font-workSans mb-[10px]">
          {category.title}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
