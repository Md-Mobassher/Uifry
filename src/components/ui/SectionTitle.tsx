const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="mb-6 lg:text-start md:text-start text-center">
      <h3 className="text-red-500 font-xl font-semibold uppercase mb-2">
        {subTitle}
      </h3>
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold ">{title}</h1>
    </div>
  );
};

export default SectionTitle;
