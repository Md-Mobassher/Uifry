import Container from "@/components/ui/Container";

const Faq = () => {
  return (
    <section className="relative mt-14">
      <Container>
        <div className="mb-6 lg:text-start md:text-start text-center">
          <h3 className="text-red-500 font-xl font-semibold uppercase mb-2">
            Faq
          </h3>
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-black">
            Frequently asked <br /> questions
          </h1>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col gap-5">
          <div className="flex-1">
            <div className="bg-red-500 p-5 rounded-lg text-white">
              <h3 className="capitalize text-xl font-bold">
                the best financial accounting app ever!
              </h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className=" p-5 rounded-lg">
              <h3 className="capitalize text-xl font-bold">
                the best financial accounting app ever!
              </h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-red-500 p-5 rounded-lg text-white">
              <h3 className="capitalize text-xl font-bold">
                the best financial accounting app ever!
              </h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className=" p-5 rounded-lg ">
              <h3 className="capitalize text-xl font-bold">
                the best financial accounting app ever!
              </h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-red-500 p-5 rounded-lg text-white">
              <h3 className="capitalize text-xl font-bold">
                the best financial accounting app ever!
              </h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className=" p-5 rounded-lg ">
              <h3 className="capitalize text-xl font-bold">
                the best financial accounting app ever!
              </h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
