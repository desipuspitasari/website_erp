import aboutus from "../../../public/images/about.svg";
import Image from "next/image";
import { FC } from "react";
import LinkBtnPrimary from "../linkbtnprimary";

const AboutUs: FC = () => {
  return (
    <>
      <section className="flex w-full flex-col bg-white pb-32 pt-16 px-4 lg:px-0">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:px-0">
          <div className="max-h-[546px] max-w-[546px] overflow-hidden ">
            <Image src={aboutus} alt="" />
          </div>
          <div className="flex flex-col justify-center text-justify  font-open-sans">
            <div className="mt-20 text-[32px] font-bold text-left">
              About us.
            </div>
            <div className="mb-6 text-xl">
              The only platform you will ever need to help run your business:
              integrated apps, kept simple, and loved by millions of happy users
            </div>
            <LinkBtnPrimary href="#">GET STARTED</LinkBtnPrimary>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
