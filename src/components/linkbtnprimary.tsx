import Link from "next/link";
import { FC } from "react";
import { ReactNode } from "react";

const LinkBtnPrimary: FC<{ href: any; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg text-center  w-[200px] max-w-[262px] bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
    >
      <div className="group-focus:border-b group-focus:border-white  ">
        {children}
        <span className="text-indigo-200" aria-hidden="true">
          &rarr;
        </span>
      </div>
    </Link>
  );
};

export default LinkBtnPrimary;
