import { ExperienceBlock } from "./ExperienceBlock";

export const About = () => {
  return (
    <section id="about" className="px-4 py-20">
      <div className="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px bg-white/20 w-16"></div>
              <span className="text-xs text-white/50 uppercase tracking-[0.3em]">
                About
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl text-white mb-8 tracking-tight">
              Design Philosophy
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                I'm a passionate Software Engineer who is aspiring to start a
                career in the Design world. Ideally, a Design Engineer role
                sounds like what I'd do best at.
              </p>
              <p>
                Great design is invisible – it simply works. My
                goal is to create interfaces that are not only visually stunning
                but also intuitive and accessible to all users.
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl text-white my-8 tracking-tight">
              My Life
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>Let me think...</p>
            </div>
          </div>
          <div className="space-y-18 lg:pt-32">
            <div>
              <h3 className="text-2xl text-white mb-8 tracking-tight mt-3">
                Experience
              </h3>
              <div className="space-y-8">
                <ExperienceBlock
                  role="I.T. Product Analyst"
                  company="Flint Hills Resources"
                  timeline="2/2025 - Present"
                />
                <ExperienceBlock
                  role="Software Engineer"
                  company="Flint Hills Resources"
                  timeline="5/2023 - 2/2025"
                />
                <ExperienceBlock
                  role="Software Consultant"
                  company="Keyhole Software"
                  timeline="9/2021 - 5/2023"
                />
                <ExperienceBlock
                  role="Software Engineer III"
                  company="Abbott"
                  timeline="9/2018 - 9/2021"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
