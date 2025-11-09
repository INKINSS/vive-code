import Link from "next/link";

const PrimaryButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="bg-customWhite text-customMainBlack text-sm border border-customBlack text-customBlack px-4 py-3 hover:bg-customMainBlack hover:text-customWhite transition-colors"
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;
