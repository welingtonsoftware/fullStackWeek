"use client"

import Image from "next/image";
import { useState } from "react";
interface ProductsImagesProps {
  name: string;
  imageURLs: string[];
}

const ProductsImages = ({ imageURLs, name }: ProductsImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageURLs[0])
  const handleImageClick = (imageURL: string) => {
    setCurrentImage(imageURL)
  }
  
  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="mt-8 px-5 grid grid-cols-4 gap-4">
        {imageURLs.map((imageURL) => (
          <button
            key={imageURL}
            className={`flex items-center justify-center rounded-lg bg-accent h-[100px]
            ${imageURL == currentImage &&
            "border-2 border-solid border-primary"}`}
            onClick={() => handleImageClick(imageURL)}
          >

            <Image
              src={imageURL}
              alt={name}
              height={0}
              width={0}
              sizes="100w"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsImages;
