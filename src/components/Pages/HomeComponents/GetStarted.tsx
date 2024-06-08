import Container from "@/components/ui/Container";
import Image from "next/image";
import img from "@/assets/ready.png";
import bg1 from "@/assets/bg.png";
import star from "@/assets/section2/Star 1.png";

const GetStarted = () => {
  return (
    <section className="py-28 relative">
      <div className="absolute flex -z-10 top-0 left-10">
        <Image src={bg1} alt="fetaure image" className="" />{" "}
      </div>
      <div className="absolute flex -z-10 top-0 right-10 ">
        <Image src={star} alt="star image" className="" />{" "}
      </div>
      <div className="absolute flex -z-10 top-80 left-16 ">
        <Image src={star} alt="star image" className="" />{" "}
      </div>
      <Container>
        <Image src={img} alt="Ready image" />
      </Container>
    </section>
  );
};

export default GetStarted;
