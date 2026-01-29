import {
  About,
  ContactIconsGroup,
  LandingPage,
  PageContainer,
  Projects,
  Skills,
  Contact,
} from "../components/index";

export const Home = () => {
  return (
    <div className="w-full">
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
