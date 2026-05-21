import Clock from "@/components/shadcnui/Clock";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
export const metadata: Metadata = {
  title: "Digital Clock App",
  description: "Digital Clock App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <div className="rounded-lg p-20 backdrop-blur-sm">
        <Clock />
      </div>
    </section>
  );
};

export default page;
