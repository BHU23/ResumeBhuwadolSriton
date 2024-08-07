import { useState, useEffect } from "react";
import { useScrollOnLoad } from "../function";
import Tool from "../component/tool";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Carousel from "../component/carousel";
import projects from "./mook/project.json";
import Pagination from "../component/pagination";

function MyProject() {
  
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    sessionStorage.setItem("scrollTo", "#project");
    sessionStorage.setItem("scrollOffset", "0");
  }, []);

  useScrollOnLoad();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate which projects to display based on currentPage
  const startIndex = (currentPage - 1) * 1; // 1 project per page
  const visibleProjects = projects.slice(startIndex, startIndex + 1);

  return (
    <div className="h-auto xl:p-24 p-10 text-black" id="project">
      {visibleProjects.map((project, index) => (
        <div id={`project`} key={index}>
          <p className="xl:text-3xl py-1 pb-12 text-b5 text-2xl font-bold text-shadow-custom">
            Project {currentPage}
          </p>
          <div className="bg-gray h-auto rounded-xl">
            <Carousel slides={project.slides} />
          </div>
          <p className="pt-12">
            {" "}
            <span className="font-semibold pt-12 text-2xl">
              {project.projectname}{" "}
              <a
                href={project.discretion}
                className="font-normal pt-12 text-base hover:text-b2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.discretion ? " • open website" : ""}
              </a>
            </span>
          </p>

          <p className="font-normal pt-4 text-1xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {project.detail}
          </p>
          {project.features ? (
            <div className="pt-6 pb-2 xl:gap-6 gap-4 ">
              <p className="font-semibold text-1xl w-auto h-auto pb-4">
                Features
              </p>
              {project.features?.map((feature, index) => (
                <p key={index}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;
                  {feature}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}
          {project.data_sources ? (
            <div className="pt-6 pb-2 xl:gap-6 gap-4 ">
              <p className="font-semibold text-1xl w-auto h-auto">
                Data Source
              </p>
              <p className="font-normal pt-4 text-1xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {project.data_sources}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="pt-6 pb-2 xl:gap-6 gap-4 ">
            <p className="font-semibold text-1xl w-auto h-auto pb-4">To Do </p>
            {project.working?.map((work, index) => (
              <p key={index}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;{work}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap pt-6 xl:gap-6 gap-4 text-center justify-items-start items-center">
            <p className="font-semibold text-1xl w-auto h-auto">Tools </p>
            <div className="font-semibold text-1xl flex flex-wrap gap-4">
              {project.tools.map((tool, index) => (
                <Tool key={index} name={tool.name} />
              ))}
            </div>
          </div>
          <div className={"w-[100%] py-10"}>
            <a
              href={project.repo}
              className="bg-b1 text-black font-medium py-4 px-4 rounded hover:bg-b3 hover:text-white w-[50%]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="pl-2">Repository project</span>
            </a>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center w-full pt-4">
        <Pagination totalProjects={projects} onPageChange={onPageChange} />
      </div>
    </div>
  );
}

export default MyProject;
