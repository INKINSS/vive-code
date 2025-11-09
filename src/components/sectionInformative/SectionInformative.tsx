import PrimaryButton from "../common/buttons/PrimaryButton";

const SectionInformative = ({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) => {
  return (
    <section className="flex-col w-full md:w-1/2 p-6 gap-4 last:border-none mb-6 md:flex-row ">
      <h2 className="font-semibold text-lg text-center">{title}</h2>
      <p className="text-balance text-center text-sm text-customLightBlack">
        {description}
      </p>
      <div className="flex justify-center mt-5">
        <PrimaryButton href={href} text={label} />
      </div>
    </section>
  );
};

export default SectionInformative;
