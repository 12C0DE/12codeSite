import { Linkedin, ArrowUpRight } from "lucide-react";
import { GithubLogo } from '../../assets/icons/GithubLogo';
import { PageTitle } from '../index';
import { Tooltip } from "react-tooltip";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#1a1410]"
    >
      <div className="max-w-6xl mx-auto">
    <PageTitle title="Get in Touch" />
    <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-7xl text-white mb-8 tracking-tight leading-tight">
              Let's Create
              <br />
              Together
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              Have a project in mind? I'd love to hear about it.
              <br/>
              Reach out and let's create something amazing.
            </p>
            
            <a
              href="mailto:12codeHz@gmail.com"
              target="_blank"
              data-tooltip-id="emailTip"
              className="group inline-flex items-center gap-4 text-2xl text-white hover:text-white/70 transition-colors mb-16"
            >
              <span>12codeHz@gmail.com</span>
              <div className="size-12 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="size-5 rotate-45 md:rotate-0" />
              </div>
            </a>
            
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/ruben-hernandez-7a7b5128a/"
                target="_blank"
                className="size-14 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:scale-110 transition-all duration-300 text-white"
                data-tooltip-id="linkedInTip"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-6" />
              </a>
              <a
                href="https://github.com/12C0DE"
                target="_blank"
                className="size-14 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:scale-110 transition-all duration-300 text-white"
                data-tooltip-id="ghTip"
                aria-label="Github"
              >
                <GithubLogo className="size-6" />
              </a>
              <Tooltip
        id="emailTip"
        place="left"
        content="mailto:"
      />
              <Tooltip id="ghTip" place="bottom" content="View GitHub Profile" />
              <Tooltip id="linkedInTip" place="right" content="View LinkedIn Profile" />
            </div>
          </div>
          
          <div className="lg:pt-32">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm text-white/50 uppercase tracking-wider mb-3">
                  Location
                </h3>
                <p className="text-xl text-white">Wichita, KS</p>
              </div>
              <div>
                <h3 className="text-sm text-white/50 uppercase tracking-wider mb-3">
                  Availability
                </h3>
                <p className="text-xl text-white">Open for freelance projects</p>
              </div>
              <div>
                <h3 className="text-sm text-white/50 uppercase tracking-wider mb-3">
                  Response Time
                </h3>
                <p className="text-xl text-white">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          🚧 🚧 🚧
        </h1>
        <p className="text-xl text-white/70 mb-12">
          This website is a work in progress
        </p>
        <div className="text-white/50 text-sm">Thanks for visiting!</div>
      </div> */}
    </section>
  );
};
