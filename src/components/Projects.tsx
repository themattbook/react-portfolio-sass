import projects from "../assets/data/projects.json";

function Projects() {
    return (
        <div className="projects height-screen">
            <div className="container height-full">
                <div className="row height-full justify-flex-end align-content-center">
                    <div className="mb-15">
                        <h2>Projects</h2>
                    </div>
                    <div className="col-12-xs col-12-lg">
                        <div className="row">
                            <div className="col-12-xs">
                                {projects.map((project) => (
                                    <div
                                        className="project-container"
                                        key={project.id}
                                    >
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            className="project-type mr-3"
                                        >
                                            {project.type} | Code
                                        </a>
                                        <p className="project-info mr-3">
                                            <a
                                                href="https://tornadovisualizer.vercel.app/"
                                                target="_blank"
                                            >
                                                {project.link}
                                            </a>
                                        </p>
                                        <p className="project-name">
                                            {project.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
