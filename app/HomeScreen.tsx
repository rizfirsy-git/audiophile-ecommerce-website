import Button from "@/components/buttons/Button";
import React from "react";
import Image from "next/image";
import xx99 from "@/public/header-home.png";
import headphoneSmall from "@/public/images/small/headphone-small.png";
import speakerSmall from "@/public/images/small/speaker-small.png";
import earphoneSmall from "@/public/images/small/earphone-small.png";
import zx9speaker from "@/public/images/big/ZX9 SPEAKER.png";

const dummyCategories = [
  {
    productName: "headphones",
    image: headphoneSmall,
  },
  {
    productName: "speakers",
    image: speakerSmall,
  },
  {
    productName: "earphones",
    image: earphoneSmall,
  },
];

const CategoriesCard: React.FC<{ image: any; productName: string }> = ({
  image,
  productName,
}) => {
  return (
    <div className="relative w-full md:w-[223px] lg:w-[350px] flex flex-col gap-8 justify-between items-center pb-8 before:bg-light-gray before:absolute before:left-0 before:right-0 before:bottom-0 before:rounded-lg before:h-[75%]">
      <div className="relative before:-z-0 before:bg-black/40 before:absolute before:-bottom-5 before:rounded-[100%] before:w-20 before:left-1/2 before:-translate-x-1/2 before:h-8 before:blur-lg">
        <Image src={image} alt={productName} />
      </div>
      <div className="flex flex-col justify-start items-center gap-4">
        <h6 className="z-10">{productName}</h6>
        <Button variant="tertiary">shop</Button>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  return (
    <article>
      <header className="bg-dark-gray w-full">
        <div
          id="header-container"
          className="max-w-6xl my-0 mx-auto lg:flex lg:justify-between lg:flex-row-reverse items-center relative"
        >
          <div className="flex-1 relative h-[600px] md:h-[720px]">
            <Image
              src={xx99}
              alt="XX99 Mark II Headphones"
              fill
              className="object-cover lg:object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col gap-7 lg:gap-10 absolute lg:static px-4 lg:px-0 items-center lg:items-start left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0">
            <div className="text-white gap-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="overline-gray opacity-50">NEW PRODUCT</p>
              <h1>XX99 Mark II HeadphoneS</h1>
              <p className="body-text max-w-sm opacity-75">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <Button variant="primary">new product</Button>
          </div>
        </div>
      </header>
      <section className="bg-white">
        <div className="max-w-6xl my-0 mx-auto pt-10 pb-[120px] md:py-24 lg:py-36 px-4 md:px-0 flex flex-col md:flex-row w-full justify-center items-center gap-4 md:gap-2 lg:gap-7">
          {dummyCategories.map((category, index) => (
            <CategoriesCard
              key={index}
              image={category.image}
              productName={category.productName}
            />
          ))}
        </div>
      </section>
      <section className="px-4 md:px-10">
        <div className="bg-lamb max-w-6xl my-0 mx-auto rounded-lg flex flex-col lg:flex-row justify-center items-center gap-32 overflow-hidden p-14 lg:p-0">
          <div>
            <Image
              src={zx9speaker}
              alt="zx9 speaker"
              className="base:w-48 lg:max-w-[410px] translate-y-11"
            />
          </div>
          <div className="max-w-[350px] flex flex-col justify-center items-center lg:block">
            <div className="text-white flex flex-col gap-6 mb-10 text-center lg:text-left">
              <h1>ZX9 speaker</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
            </div>
            <Button variant="secondary">see product</Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default HomeScreen;
