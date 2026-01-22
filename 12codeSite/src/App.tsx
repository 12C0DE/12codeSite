// import {
//   About,
//   ContactIconsGroup,
//   LandingPage,
//   PageContainer,
//   Projects,
//   Skills,
//   UnderConstruction,
//   // WIP,
// } from "./components/index";
import { Home, Project } from "./pages/index";
import { ClarityPageTracker } from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useClarity } from "./hooks/useClarity";
import "./App.css";

function App() {
  useClarity();

  return (
    <div className="w-full">
      {/* <PageContainer>
        <LandingPage />
        <Projects />
        <About />
        <Skills />
        <UnderConstruction />
      </PageContainer>
      <ContactIconsGroup /> */}
      <BrowserRouter>
        <ClarityPageTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
