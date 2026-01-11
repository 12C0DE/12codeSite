import {
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
        <UnderConstruction />
      </PageContainer>
    </div>
  );
}

export default App;
