import Container from "@/components/ui/Container";
import Image from "next/image";
import img from "@/assets/section3/section3.png";
import SectionTitle from "@/components/ui/SectionTitle";
import icon from "@/assets/section3/icon-alarm.png";
import bg from "@/assets/section3/bg.png";
import AdvantageDetails from "@/components/ui/AdvantageDetails";

const Advantage = () => {
  return (
    <section className="relative ">
      <div className="absolute flex -z-10 top-20 right-48">
        <Image src={bg} alt="backgroud image" className="" />{" "}
      </div>

      <Container>
        <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center lg:gap-5 md:gap-4 gap-2">
          <div className="flex-1">
            <SectionTitle title="Why Choose Uifry?" subTitle="Advantages" />

            <AdvantageDetails
              icon={icon}
              title="Clever Notifications"
              details="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
            />
          </div>
          <div className="flex-1">
            <div className="flex">
              <Image src={img} alt="fetaure image" className="" />{" "}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Advantage;
