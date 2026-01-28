import {
  About,
  ContactIconsGroup,
  LandingPage,
  PageContainer,
  Projects,
  Skills,
  UnderConstruction,
} from "../components/index";

export const Home = () => {
  return (
    <div className="w-full">
      <PageContainer>
        <LandingPage />
        <Projects />
        <About />
        <Skills />
        <UnderConstruction />
      </PageContainer>
      <ContactIconsGroup />
    </div>
  );
};
