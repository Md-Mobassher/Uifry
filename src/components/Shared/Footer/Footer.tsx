import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import email from "@/assets/email.png";
import call from "@/assets/call.png";

const Footer = () => {
  return (
    <footer className="mt-10 lg:mt-16 md:mt-14">
      <div className="flex gap-5 flex-wrap justify-between">
        <div>
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex justify-start items-center gap-3 mt-4">
            <Image src={email} alt="email" />
            <p>help@frybix.com</p>
          </div>
          <div className="flex justify-start items-center gap-3 mt-3">
            <Image src={call} alt="call" />
            <p>+1 234 456 678 89</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-5">Links</h2>
          <p className="mb-3">Home</p>
          <p className="mb-3">About Us</p>
          <p className="mb-3">Bookings</p>
          <p className="mb-3">Blog</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-5">Legal</h2>
          <p className="mb-3">Terms of Use</p>
          <p className="mb-3">Privacy Policy</p>
          <p className="mb-3">Cookie Policy</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-5">Product</h2>
          <p className="mb-3">Take Tour</p>
          <p className="mb-3">Live chat</p>
          <p className="mb-3">Reviews</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-5">Newsletter</h2>
          <p className="mb-3">Stay Up to Date</p>
          <div className="flex justify-center items-center gap-5 lg:mt-10 mt-5">
            <p className="text-gray-600">Your email</p>
            <Link
              href="/"
              className=" text-md font-semibold  py-4 px-10 text-white bg-black hover:bg-gray-700 rounded-md"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="border-t mt-5 max-w-4xl mx-auto py-5 text-center">
        <p className="text-center">
          Copyright &copy; 2022 uifry.com all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
