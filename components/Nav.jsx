// link (next js)
import Link from "next/link";
// next hooks
import { usePathname } from "next/navigation";

//framer motion
import { motion } from "framer-motion";

const links = [
  { path: "/works", name: "Works" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

export default function Nav({ containerStyles, linkStyles, dotStyles }) {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize group ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "0" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${dotStyles}`}
              />
            )}

            {link.name}
            <div className="w-[6px] h-[6px] bg-black absolute rounded-full left-[50%] top-[140%] scale-0 transition-all group-hover:scale-100"></div>
          </Link>
        );
      })}
    </nav>
  );
}
