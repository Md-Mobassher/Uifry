import Container from "@/components/ui/Container";
import Image from "next/image";
import img from "@/assets/section4/section-4.png";
import icon from "@/assets/section4/star-round.png";
import bg from "@/assets/section4/bg4.png";
import AdvantageDetails from "@/components/ui/AdvantageDetails";
import star from "@/assets/section2/Star 1.png";

const Customisable = () => {
  return (
    <section className="relative ">
      <div className="absolute flex -z-10 top-0 left-48">
        <Image src={bg} alt="backgroud image" className="" />{" "}
      </div>
      <div className="absolute flex -z-10 top-0 left-1/2 -mr-20">
        <Image src={star} alt="fetaure image" className="" />{" "}
      </div>
      <div className="absolute flex -z-10 bottom-0 left-2/3 ">
        <Image src={star} alt="fetaure image" className="" />{" "}
      </div>

      <Container>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:gap-5 md:gap-4 gap-2">
          <div className="flex-1">
            <div className="flex">
              <Image src={img} alt="fetaure image" className="" />{" "}
            </div>
          </div>
          <div className="flex-1">
            <AdvantageDetails
              icon={icon}
              title="Fully Customizable"
              details="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Customisable;
