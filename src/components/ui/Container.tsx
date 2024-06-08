const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1090px] mx-auto lg:px-6 md:px-5 px-4 py-5">
      {children}
    </div>
  );
};

export default Container;
