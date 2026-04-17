import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleCreateProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onProjectCreated={handleCreateProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar onCreateProject={handleCreateProject} />
      {content}
    </main>
  );
}

export default App;
