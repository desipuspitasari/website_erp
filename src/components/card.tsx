import { FC } from "react";
import LinkBtnPrimary from "./linkbtnprimary";

const Card: FC<{
  title: string;
  fasilitasa: string;
  fasilitasb: string;
  fasilitasc: string;
  fasilitasd: string;
  fasilitase: string;
  fasilitasf: string;
  price: string;
  href: any;
}> = ({
  title,
  fasilitasa,
  fasilitasb,
  fasilitasc,
  fasilitasd,
  fasilitase,
  fasilitasf,
  price,
  href,
}) => {
  return (
    <div className="h-full w-full rounded-xl  border bg-white p-4 pb-6 drop-shadow-xl ">
      <div className="text-2xl font-bold text-blue-primary-500">{title}</div>
      <div className="mt-4 font-black text-4xl">{price}</div>
      <div className="mt-2 flex py-2 border-b border-black pb-5">
        <LinkBtnPrimary href={href}>Subscribe</LinkBtnPrimary>
      </div>
      <div className="mt-4">{fasilitasa}</div>
      <div className="">{fasilitasb}</div>
      <div className="">{fasilitasc}</div>
      <div className="">{fasilitasd}</div>
      <div className="">{fasilitase}</div>
      <div className="">{fasilitasf}</div>
    </div>
  );
};
export default Card;
