import Image from "next/image";

const FeatureDetails = ({
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
      <div className="flex gap-5 mb-3 justify-start items-center">
        <Image src={icon} alt="icon" width={30} height={30} />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <p>{details}</p>
    </div>
  );
};

export default FeatureDetails;
