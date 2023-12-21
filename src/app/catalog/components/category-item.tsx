import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
    <div className="flex flex-col">
      <div className="bg-category-item-gradient rounded-t-lg rounded-tr-l
       w-full h-[150px] flex items-center justify-center">
        <Image
          src={category.imageURL}
          alt={category.name}
          width={0}
          height={0}
          sizes="100w"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="bg-accent py-2 roudede-br-lg rouded-bl-lg">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div></Link>
  );
};

export default CategoryItem;
