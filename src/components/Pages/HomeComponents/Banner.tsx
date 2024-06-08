import Link from "next/link";
import { MoveRight, Play } from "lucide-react";
import Image from "next/image";
import banner1 from "@/assets/banner/banner-2.png";
import banner2 from "@/assets/banner/Frame 1.png";
import mobile from "@/assets/banner/iPhone-13-Pro-Front.png";
import mobile2 from "@/assets/banner/iPhone-13-Pro-Front-1.png";
import bgcolor from "@/assets/banner/Group 35899.png";
import bgcolor2 from "@/assets/banner/bg-5.png";
import Container from "@/components/ui/Container";

const Banner = () => {
  return (
    <section className="relative">
      <Container>
        <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between items-center justify-center md:justify-between gap-10">
          <div className="absolute z-0  -top-28  flex">
            <Image src={bgcolor2} alt="banner image" className="" />{" "}
          </div>
          <div className="flex-1 z-10 mt-10">
            <h1 className="text-5xl font-bold font-sans">Make The Best</h1>
            <h1 className="text-5xl font-bold font-sans">
              Financial Decisions
            </h1>
            <p className="mt-5">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex gap-5 flex-wrap justify-start items-center mt-10">
              <Link href="#">
                <div className=" text-md font-semibold  py-4 px-5 text-white bg-black gap-3 inline-flex  hover:bg-gray-700 rounded-md">
                  <p>Get Started</p> <MoveRight className="" />
                </div>
              </Link>
              <Link href="#">
                <div className="flex justify-start items-center gap-3 hover:text-red-500 ">
                  <Play className="border p-2 rounded-full size-10 border-black " />
                  <p>Watch Video</p>
                </div>
              </Link>
            </div>
            <div className="max-w-xl ">
              <Image src={banner1} alt="banner" />
            </div>
          </div>
          {/* banner image */}
          <div className="lg:flex hidden flex-1 group lg:w-[700px]">
            <div className="absolute z-0 right-36 -top-7  flex">
              <Image src={bgcolor} alt="banner image" className="" />
            </div>
            <div className="absolute -top-14 right-6 z-0 ">
              <Image src={banner2} alt="banner image" className="flex" />
            </div>
            <div className="absolute top-8  right-10 z-10  ">
              <Image src={mobile} alt="banner image" className="" />
            </div>
            <div className="absolute z-20 right-36 -top-7  flex">
              <Image src={mobile2} alt="banner image" className="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
