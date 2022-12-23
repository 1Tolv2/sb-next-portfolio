import React from "react";
import ProjectDesktopCard from "../components/ProjectCards/ProjectDesktopCard";
import ProjectMobileCard from "../components/ProjectCards/ProjectMobileCard";

const ProjectPreviewList = ({ blok }) => {
  return (
    <div className="flex flex-col justify-evenly lg:flex-row w-3/4 lg:w-auto mx-auto gap-14 items-end">
      {blok?.projects?.map((project) => {
        return project?.content?.platform === "mobile" ? (
          <ProjectMobileCard story={project} key={project?.uuid} />
        ) : (
          <ProjectDesktopCard story={project} key={project?.uuid} />
        );
      })}
    </div>
  );
};

export default ProjectPreviewList;
