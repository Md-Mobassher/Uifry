import Container from "@/components/ui/Container";
import Image from "next/image";
import featureImg from "@/assets/section2/section2.png";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureDetails from "@/components/ui/FeatureDetails";
import icon1 from "@/assets/section2/star.png";
import icon2 from "@/assets/section2/Icon2.png";
import icon3 from "@/assets/section2/icon3.png";
import bg1 from "@/assets/section2/bg-1.png";
import bg2 from "@/assets/section2/bg-2.png";
import star from "@/assets/section2/Star 1.png";

const Features = () => {
  return (
    <section className="relative lg:py-10 md:py-8 py-5">
      <div className="absolute flex -z-10 lg:top-20 lg:left-20 md:top-18 md:left-18 top-0 left-5">
        <Image src={star} alt="fetaure image" className="" />{" "}
      </div>
      <div className="absolute flex -z-10 top-0 left-10">
        <Image src={bg1} alt="fetaure image" className="" />{" "}
      </div>
      <div className="absolute flex -z-10 lg:right-0 lg:top-20 md:right-0 md:top-16 right-0 bottom-5">
        <Image src={bg2} alt="fetaure image" className="" />{" "}
      </div>

      <Container>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center gap-5">
          <div className="flex-1">
            <div className="flex">
              <Image src={featureImg} alt="fetaure image" className="" />{" "}
            </div>
          </div>
          <div className="flex-1">
            <SectionTitle title="Uifry Premium" subTitle="Features" />

            <FeatureDetails
              icon={icon1}
              title="Budgeting Interval"
              details="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
            />
            <FeatureDetails
              icon={icon2}
              title="Budgeting Interval"
              details="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
            />
            <FeatureDetails
              icon={icon3}
              title="Budgeting Interval"
              details="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
