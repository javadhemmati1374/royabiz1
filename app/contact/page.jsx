import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section className="h-[84vh]">
        <div className="h-[80rem] w-full bg-white  bg-grid-black/[0.1] relative ">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 !z-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

          {/* hero */}
          <div className="container py-4 pt-48 mx-auto">
            <div className="flex flex-col mx-auto xl:mx-0 xl:text-left">
              <div className="flex gap-4 justify-start items-center text-[64px] font-bold text-secondary z-0">
                Contact
              </div>
              <p className="text-[24px] mt-2 leading-8 max-w-[850px] mx-auto xl:mx-0 z-0">
                Helping brands to stand out in the digital era. Together we will
                set the new status quo. No nonsense, always on cutting edge.
              </p>
            </div>
            {/* buttons */}
            <div className="flex flex-col items-end -mt-28">
              <Link
                href="/contact"
                className="font-bold italic py-24 px-12 rounded-full bg-foreground text-primary-foreground text-[24px] hover:bg-primary transition-all z-[1]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
