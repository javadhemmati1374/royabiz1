"use client";
import Link from "next/link";

export default function Project({ index, title, method, path, manageModal }) {
  return (
    <Link
      href={path}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="w-[100%] py-[50px] flex items-center justify-between last-of-type:border-b-[1px] border-t-[1px] transition-all duration-500 group hover:opacity-40 cursor-pointer"
    >
      <h2 className="text-[64px] font-bold transition-all duration-500 group-hover:translate-x-[10px]">
        {title}
      </h2>
      <p className="transition-all duration-500 group-hover:-translate-x-[10px]">
        {method}
      </p>
    </Link>
  );
}

// // tap into it
