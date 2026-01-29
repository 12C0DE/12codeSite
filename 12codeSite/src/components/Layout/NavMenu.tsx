import { useEffect, useState } from "react";
import { useScrollToElement } from "../../hooks/useScrollToElement";
import { Menu, X } from "lucide-react";

interface NavMenuProps {
  isVisible: boolean;
}

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const NavMenu = ({ isVisible }: NavMenuProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToElement = useScrollToElement();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      //section currenlty in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }, 650);
  };

  if (!isVisible) return null;

  return (
    <>
      <nav className="hidden 2xl:block fixed right-0 top-1/2 -translate-y-1/2 z-50 pr-8">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="relative space-y-8">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              const distanceFromActive = Math.abs(
                sections.findIndex((s) => s.id === activeSection) - index,
              );

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToElement(section.id)}
                  className="group relative flex items-center justify-end w-full transition-all duration-300"
                  style={{
                    transform: `scale(${isActive ? 1 : 1 - distanceFromActive * 0.1})`,
                    opacity: isActive ? 1 : 0.7 - distanceFromActive * 0.1,
                  }}
                >
                  <span
                    className={`absolute right-12 text-xs uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "text-white opacity-100 translate-x-0"
                        : "text-white/80 opacity-70 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    }`}
                  >
                    {section.label}
                  </span>
                  <div className="relative">
                    <div
                      className={`size-3 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-white bg-white scale-100"
                          : "border-white/30 bg-transparent group-hover:border-white group-hover:scale-130"
                      }`}
                    />
                    {isActive && (
                      <div className="absolute inset-0 size-3 rounded-full bg-white animate-ping opacity-30" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-1 absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-white/30 font-mono">
            <span>
              {String(
                sections.findIndex((s) => s.id === activeSection) + 1,
              ).padStart(2, "0")}
            </span>
            /<span>{String(sections.length).padStart(2, "0")}</span>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="2xl:hidden" onClick={handleMobileNavClick}>
        {/* Menu Button */}
        <button
          onClick={handleMobileNavClick}
          className="fixed top-6 right-6 z-50 size-12 border border-white/30 rounded-full flex items-center justify-center bg-black/10 backdrop-blur-sm hover:border-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="size-5 text-white" />
          ) : (
            <Menu className="size-5 text-white" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-300 bg-black/95 backdrop-blur-lg transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToElement(section.id)}
                  className={`group relative transition-all duration-500 ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center align-middle gap-8 -ml-9">
                      <span
                        className={`text-sm font-mono w-1/2 text-right transition-colors ${
                          isActive ? "text-white/50" : "text-white/20"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative w-1/2">
                        <span
                          className={`text-3xl md:text-4xl tracking-tight transition-colors ${
                            isActive ? "text-white" : "text-white/60"
                          } group-hover:text-white`}
                        >
                          {section.label}
                        </span>

                        {/* Active indicator line */}
                        {isActive && (
                          <div className="absolute -bottom-2 left-0 -right-6 h-px   bg-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Close instruction */}
            <div className="absolute bottom-12 left-0 right-0 text-center">
              <p className="text-xs text-white/40 uppercase tracking-[0.3em]">
                Tap anywhere to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
