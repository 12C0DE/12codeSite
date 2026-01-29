import { Home, NotFound, Project } from "./pages/index";
import { ClarityPageTracker, NavMenu } from "./components/index";
import { ProjectProvider } from "./context/ProjectContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useClarity } from "./hooks/useClarity";
import "./App.css";

function App() {
  useClarity();

  return (
    <div className="w-full">
      <NavMenu isVisible={true} />
      <BrowserRouter>
        <ProjectProvider>
          <ClarityPageTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
          </Routes>
        </ProjectProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
