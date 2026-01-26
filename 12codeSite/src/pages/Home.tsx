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
    <>
      <PageContainer>
        <LandingPage />
        <Projects />
        <About />
        <Skills />
        <UnderConstruction />
      </PageContainer>
      <ContactIconsGroup />
    </>
  );
};
