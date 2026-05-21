import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Clock App",
  description: "Digital Clock App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <div className="rounded-lg p-50 backdrop-blur-sm"></div>
    </section>
  );
};

export default page;
