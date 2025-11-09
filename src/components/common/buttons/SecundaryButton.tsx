import Link from "next/link";

const SecundaryButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-customMainBlack text-sm border-b border-customBlack text-customBlack px-4 py-3 hover:bg-customMainBlack hover:text-customWhite transition-colors"
    >
      {text}
    </Link>
  );
};

export default SecundaryButton;
