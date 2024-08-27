import Image from "next/image";

export default function DevImg({ containerStyles, imgSrc, alt }) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill sizes="100%" alt={alt} />
    </div>
  );
}
