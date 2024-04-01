import Image from "next/image";
import React from "react";

interface AppButtonProps {
  src: string;
  alt: string;
  title: string;
  children: React.ReactNode;
  className: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  src,
  alt,
  title,
  children,
  className,
}) => (
  <button
    type="button"
    className={`flexCenter gap-3 rounded-full border ${className} w-full`}>
    <Image title={title} alt={alt} width={24} height={24} src={src} />
    <p className="bold-16 whitespace-nowrap cursor-pointer">{children}</p>
  </button>
);

const GetApp = () => {
  return (
    <div
      className="relative w-full h-full mt-28 mb-28 rounded-[90px]"
      style={{
        backgroundImage: 'url("/pattern.png")',
      }}>
      <div className="app__holder flex">
        <div className="left__app w-full flex items-center justify-center">
          <div className="flex flex-col max-w-[600px] w-full">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] text-white mb-5">
              Get for free now!
            </h2>
            <p className="regular-16 text-gray-10 mb-5">
              Available on IOS and Android
            </p>
            <div className="left__app--btn flex ">
              <AppButton
                src="/apple.svg"
                alt="Apple"
                title="Apple Store"
                className="btn_white gap-3 rounded-full border btn_white mr-5"> 
                App Store
              </AppButton>
              <AppButton
                src="/android.svg"
                alt="Android Store"
                title="Android Store"
                className="border-transparent bg-transparent gap-3 rounded-full btn_dark_green_outline"> 
                Play Store
              </AppButton>
            </div>
          </div>
        </div>
        <div className="right__app w-full ">
          <Image
            src="/phones.png"
            alt="phone"
            width={400}
            height={400}
            className="mx-auto"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
