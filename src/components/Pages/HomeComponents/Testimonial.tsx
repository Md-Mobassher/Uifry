import Container from "@/components/ui/Container";
import Image from "next/image";
import users from "@/assets/section5/section-5.png";
import user1 from "@/assets/section5/user1.png";
import user2 from "@/assets/section5/user2.png";
import user3 from "@/assets/section5/user3.png";
import user4 from "@/assets/section5/user4.png";
import user5 from "@/assets/section5/user5.png";
import bg1 from "@/assets/section5/bg-5.png";
import star from "@/assets/section2/Star 1.png";

const Testimonial = () => {
  return (
    <section className="relative ">
      <div className="absolute flex -z-10 top-28 left-28">
        <Image src={bg1} alt="fetaure image" className="" />{" "}
      </div>
      <div className="absolute -z-10  bottom-0 left-16 lg:flex md:flex hidden">
        <Image src={star} alt="fetaure image" className="" />{" "}
      </div>
      <Container>
        <div className="mb-6 max-w-sm mx-auto text-center">
          <h3 className="text-red-500 font-xl font-semibold uppercase mb-2">
            Testimonial
          </h3>
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-black">
            What Our Users <br /> Say About Us?
          </h1>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center gap-5">
          <div className="flex-1">
            <div className="flex">
              <Image src={users} alt="fetaure image" className="" />{" "}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold capitalize mb-5">
              the best financial accounting <br /> app ever!
            </h1>

            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <div className="flex justify-start items-center gap-3 mt-5">
              <Image src={user1} alt="user image" width={40} height={40} />
              <Image
                src={user2}
                alt="user image"
                width={30}
                height={30}
                className="opacity-70"
              />
              <Image
                src={user3}
                alt="user image"
                width={30}
                height={30}
                className="opacity-70"
              />
              <Image
                src={user4}
                alt="user image"
                width={30}
                height={30}
                className="opacity-70"
              />
              <Image
                src={user5}
                alt="user image"
                width={30}
                height={30}
                className="opacity-70"
              />
            </div>
            <h3 className="text-xl font-bold capitalize mt-6">nick jonas</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
