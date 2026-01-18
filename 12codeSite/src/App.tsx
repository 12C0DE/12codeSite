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
import { useClarity } from "./hooks/useClarity";
import "./App.css";

function App() {
  useClarity();

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
      {/* <BrowserRouter>
        <ClarityPageTracker /> --once routers are added, this is how to use clarity
        <Routes> routes </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
