import Image from "next/image";

const AdvantageDetails = ({
  icon,
  title,
  details,
}: {
  icon: any;
  title: string;
  details: string;
}) => {
  return (
    <div className="mb-6">
      <div className="flex gap-5 mb-5 justify-start items-center">
        <Image src={icon} alt="icon" width={40} height={40} />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <p>{details}</p>
    </div>
  );
};

export default AdvantageDetails;
