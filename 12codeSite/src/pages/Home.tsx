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
    <div className="w-full overflow-x-hidden">
      <PageContainer>
        <LandingPage />
        <About />
        <Projects />
        <Skills />
        <UnderConstruction />
      </PageContainer>
      <ContactIconsGroup />
    </div>
  );
};
