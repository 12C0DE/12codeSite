import { LandingPage, PageContainer, UnderConstruction } from "./components/index";
import "./App.css";

function App() {
  return (
    <div className="w-full">
      <PageContainer>
        <LandingPage />
        <UnderConstruction />
      </PageContainer>
    </div>
  );
}

export default App;
