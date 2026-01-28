import { ExperienceBlock } from "./ExperienceBlock";
import { Heading, PageTitle } from "../Layout";

export const About = () => {
  return (
    <section id="about" className="px-4 py-32">
      <div className="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <PageTitle title="About" />
            <Heading text="Design Philosophy" />
            <div className="space-y-6 mb-8 text-lg text-white/60 leading-relaxed">
              <p>
                I design software with people in mind. If something is hard to use, it's not the user's fault—it's a design problem.
              </p>
              <p>
                As an engineer with a deep focus on UI/UX, I work on complex ideas and create intuitive, 
                clean designs that make the experience feel effortless. My process is user-centered—grounded in how people actually interact, 
                not in assumptions about how engineers think things should work.
              </p>
              <h4 className="italic">Code and Design thoughtfully to make it make sense</h4>
            </div>
            <Heading text="My Life" />
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
                  link="https://www.fhr.com/"
                />
                <ExperienceBlock
                  role="Software Engineer"
                  company="Flint Hills Resources"
                  timeline="5/2023 - 2/2025"
                  link="https://www.fhr.com/"
                />
                <ExperienceBlock
                  role="Software Consultant"
                  company="Keyhole Software"
                  timeline="9/2021 - 5/2023"
                  link="https://keyholesoftware.com/"
                />
                <ExperienceBlock
                  role="Software Engineer III"
                  company="Abbott"
                  timeline="9/2018 - 9/2021"
                  link="https://www.abbott.com/en-us/homepage"
                />
                <ExperienceBlock
                  role="Software Developer"
                  company="Design Resources, Inc."
                  timeline="9/2017 - 9/2018"
                  link="https://www.dridesign.com/"
                />
                <ExperienceBlock
                  role="Application Developer"
                  company="Airbus Americas"
                  timeline="9/2013 - 9/2017"
                  link="https://www.airbus.com/en"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
