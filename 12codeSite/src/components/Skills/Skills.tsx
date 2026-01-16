import { ServiceCard } from "./index"
import { services } from '../../assets/skills/services';
import { Heading, PageTitle } from "../Layout";

export const Skills = () => {
    return (
        <section id="skills" className="px-4 py-32">
            <PageTitle title="Skills to pay bills" />
            <Heading text="What I Do" />
            <div className="xs:max-w-full md:max-w-6xl mx-auto">
                <div className="mb-16">
          <p className="text-xl text-white/60">
            {"We talk > mockups > design > build"}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
            ))}
        </div>
        <div className="mt-24">
          <h3 className="text-3xl text-white mb-8 text-center tracking-tight">
            Tools & Technologies
          </h3>
          <p className="text-center text-white/50 mb-8">
            Hover over each tool to interact • Drag to rotate the view
          </p>
          {/* <ThreeSkills /> */}
        </div>
            </div>
        </section>
    )
}