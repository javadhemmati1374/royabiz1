import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="z-0 ">
      <div className="flex items-center pr-[72px] relative overflow-hidden group cursor-pointer">
        <div className="group-hover:translate-x-[65px] group-hover:transition group-hover:duration-500 group-hover:ease-[cubic-bezier(0.76, 0, 0.24, 1)]  absolute -left-[48px] pr-[0.3rem] transition-transform duration-1000	">
          <Image
            priority={true}
            src="/logo.svg"
            width="0"
            height="0"
            sizes="100vw"
            alt="Main Logo RoyaBiz"
            className="w-[40px] h-auto"
          />
        </div>
        <div className="group-hover:translate-x-[65px] group-hover:transition group-hover:duration-500 group-hover:ease-[cubic-bezier(0.76, 0, 0.24, 1)] pl-[0.3rem] relative transition-transform	 duration-1000 ">
          <Image
            src="/RoyaBiz-black.svg"
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
            alt="Main Logo RoyaBiz"
            className="w-[104px] h-auto"
          />
        </div>
      </div>
    </Link>
  );
}
