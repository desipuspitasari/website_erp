import Link from "next/link";
import { FC } from "react";
import { ReactNode } from "react";

const LinkBtnOutline: FC<{ href: any; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="inline-block w-[200px] max-w-[262px] text-center rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
    >
      <div className="group-focus:border-b group-focus:border-white  ">
        {children}
        <span className="text-gray-400" aria-hidden="true">
          &rarr;
        </span>
      </div>
    </Link>
  );
};

export default LinkBtnOutline;
