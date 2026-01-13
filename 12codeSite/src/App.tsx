import {
  About,
  ContaactIconsGroup,
  LandingPage,
  PageContainer,
  Projects,
  UnderConstruction,
} from "./components/index";
import "./App.css";

function App() {
  return (
    <div className="w-full">
      <PageContainer>
        <LandingPage />
        <Projects />
        <About />
        <UnderConstruction />
      </PageContainer>
      <ContaactIconsGroup />
    </div>
  );
}

export default App;
