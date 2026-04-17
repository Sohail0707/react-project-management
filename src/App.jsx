import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartCreateProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleCreateProject(projectData) {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onProjectCreated={handleCreateProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartCreateProject={handleStartCreateProject} />
    );
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar onStartCreateProject={handleStartCreateProject} />
      {content}
    </main>
  );
}

export default App;
