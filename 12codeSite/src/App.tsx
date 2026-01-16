import {
  About,
  ContactIconsGroup,
  LandingPage,
  PageContainer,
  Projects,
  Skills,
  UnderConstruction,
  // WIP,
} from "./components/index";
import "./App.css";

function App() {
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
}

export default App;
