import { ServiceCard } from "./index";
import { services } from "../../assets/skills/index";
import { Heading, PageTitle } from "../Layout";
import { ThreeSkills } from "./index";

export const Skills = () => {
  return (
    <section id="skills" className="px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <PageTitle title="Skills to pay bills" />
        <Heading text="What I Do" />
        <div className="max-w-full md:max-w-6xl">
          <div className="mb-16">
            <p className="text-xl text-white/60">
              {"We talk > design > mockups > build"}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-36">
            <h3 className="text-3xl text-white mb-2 text-center tracking-tight">
              <b>Tools & Technologies</b>
            </h3>
            <ThreeSkills />
          </div>
        </div>
      </div>
    </section>
  );
};
