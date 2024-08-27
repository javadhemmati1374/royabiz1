"use client";

//components
import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="absolute w-full top-0 z-10 ">
      <div className="relative py-10 px-20  mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          {/* nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 item-center text-[1.1rem]"
            linkStyles="relative hover:text-black transition-all"
            dotStyles="w-[6px] h-[6px] bg-black absolute rounded-full left-[50%] top-[140%]  "
          />
        </div>
        {/* mobile nav */}
        <div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
