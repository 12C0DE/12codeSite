import {
  About,
  Contact,
  ContactIconsGroup,
  LandingPage,
  NavMenu,
  PageContainer,
  Projects,
  Skills,
} from "../components/index";

export const Home = () => {
  return (
    <div className="w-full">
      <NavMenu isVisible={true} />
      <PageContainer>
        <LandingPage />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </PageContainer>
      <ContactIconsGroup />
    </div>
  );
};
