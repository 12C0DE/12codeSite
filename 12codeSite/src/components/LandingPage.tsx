import { ChevronRight } from "lucide-react";

export const LandingPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#1a1410]">
      <div className="max-w-6xl mx-auto">
        {/* Main Text */}
        <div className="mb-8">
          {/* <div className="relative inline-block"> */}
          <div className="flex">
            <h1 className="text-[10rem] md:text-[14rem] leading-none tracking-tighter text-white uppercase -ml-4">
              PORT
              <span className="relative inline-block">
                <span className="relative z-10">FO</span>
                {/* Artistic brush stroke overlay */}
                <svg
                  className="absolute -top-8 -left-4 w-[180px] h-[120px]"
                  viewBox="0 0 200 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 60 Q 50 10, 100 50 T 190 40"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    //   className="animate-[drawLine_1.5s_ease-out_0.3s_forwards]"
                    style={{
                      strokeDasharray: 400,
                      strokeDashoffset: 400,
                    }}
                  />
                </svg>
              </span>
              LIO
            </h1>
            <div className="text-8xl md:text-9xl text-white/10 relative mt-12 ml-4 select-none z-50">
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
        {/* Subtitle and Year */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {/* <div className="h-px bg-white/30 w-24"></div> */}
          <div className="text-white/70 text-sm tracking-[0.3em] uppercase text-nowrap">
            Software Engineer
          </div>
          {/* <div className="flex flex-row w-full gap-8 justify-center items-center " style={{
                    color: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.6))'
                }}> */}

          <div
            className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg, #bbbbbb, #2e2f33" }}
          ></div>
          {/* <div style={{ marginLeft: -44 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e2f33"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div> */}
          <ChevronRight
            color="#2e2f33"
            size={48}
            className="ml-[-48px] -mr-4"
          />
          <div
            className="text-sm tracking-[0.3em] uppercase"
            style={{ color: "#2e2f33" }}
          >
            Designer
          </div>
        </div>
        {/* END of SE -> Des */}
        <div className="max-w-4xl mb-12 flex flex-row gap-1">
          <h2 className="text-4xl md:text-4xl text-white mb-6">I am </h2>
          <h2 className="text-5xl md:text-6xl mb-6 animate-squeeze">12</h2>
          <h2 className="text-4xl md:text-4xl text-white mb-6">uben.</h2>
        </div>
      </div>
    </section>
  );
};
