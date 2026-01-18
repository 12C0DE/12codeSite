import { ArrowDown, ChevronRight } from "lucide-react";
import { useScrollToElement } from "../hooks/useScrollToElement";

export const LandingPage = () => {
  const scrollToElement = useScrollToElement();

  return (
    <section className="min-h-screen flex px-4">
      <div className="xs:max-w-full md:max-w-6xl w-full">
        <div className="mb-8 flex flex-row flex-wrap">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col gap-10 md:gap-7">
              <h1 className="text-[8rem] md:text-[10rem] lg:text-[14rem] tracking-tighter text-white -ml-4 font-hero leading-none">
                PORT
              </h1>
              <h1 className="text-[8rem] md:text-[10rem] lg:text-[16rem] tracking-tighter text-white -ml-4 font-hero leading-none -my-22">
                FO
              </h1>
              <h1 className="text-[8rem] md:text-[10rem] lg:text-[16rem] tracking-tighter text-white -ml-4 font-hero leading-none">
                LIO
              </h1>
            </div>
            <div className="flex flex-row items-end text-7xl md:text-9xl text-white/10 z-50 font-hero mb-1 font=black">
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-white/70 text-sm tracking-[0.3em] uppercase text-wrap md:text-nowrap">
            Software Engineer
          </div>
          <div
            className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg, #bbbbbb, #2e2f33" }}
          ></div>
          <ChevronRight
            color="#2e2f33"
            size={48}
            className="ml-[-48px] -mr-4 invisible md:visible"
          />
          <div
            className="text-sm tracking-[0.3em] uppercase font-bold"
            style={{ color: "#2e2f33" }}
          >
            Designer
          </div>
        </div>
        {/* END of SE -> Des */}
        <div className="max-w-4xl flex flex-row gap-1 items-baseline">
          <h2 className="text-4xl text-white mb-6">Hey, I'm </h2>
          <h2 className="text-4xl md:text-6xl mb-6 -tracking-4">12</h2>
          <h2 className="text-4xl text-white mb-6 ml-1 md:ml-2">uben.</h2>
        </div>
        <p className="text-2xl text-white/60 leading-relaxed mb-8">
          And I built this site. I'm a software engineer working towards a
          design future.
        </p>
        <div className="text-center justify-center mt-24">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("projects");
            }}
            className="group inline-flex items-center gap-3 text-white hover:text-white/70 transition-colors"
          >
            <div className="size-12 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowDown className="size-6" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
