import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
}

const CardBlock = ({ title, description, href }: Props) => {
  return (
    <Link
      className="w-full bg-customWhite px-4 py-6 shadow-xl md:w-1/2 lg:w-1/3 flex flex-col justify-end border border-customGray hover:border-customLightBlack animate-blurUp"
      href={href}
    >
      <h1 className="text-bold mb-2 text-md">{title}</h1>
      <p className="font-normal text-balance text-sm text-customLightBlack">
        {description}
      </p>
    </Link>
  );
};

export default CardBlock;
