import Advantage from "@/components/Pages/HomeComponents/Advantage";
import Banner from "@/components/Pages/HomeComponents/Banner";
import Customisable from "@/components/Pages/HomeComponents/Customisable";
import Faq from "@/components/Pages/HomeComponents/Faq";
import Features from "@/components/Pages/HomeComponents/Features";
import GetStarted from "@/components/Pages/HomeComponents/GetStarted";
import Testimonial from "@/components/Pages/HomeComponents/Testimonial";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Features />
      <Advantage />
      <Customisable />
      <Testimonial />
      <Faq />
      <GetStarted />
    </div>
  );
};

export default HomePage;
