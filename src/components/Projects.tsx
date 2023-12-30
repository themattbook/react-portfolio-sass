import { useState, useEffect } from "react";

function Projects() {
    interface Repo {
        id: number;
        name: string;
        created_at: string;
        // Add more properties as needed based on the GitHub API response
    }
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/themattbook/repos?per_page=8&sort=updated&direction=desc"
                );
                if (response.ok) {
                    const data = await response.json();
                    setRepos(data);
                } else {
                    console.error(
                        "Error fetching repositories:",
                        response.statusText
                    );
                }
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        };

        fetchRepos();
    }, []);

    const formatDateString = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Adjust the format as needed
    };
    return (
        <div className="projects height-screen">
            <div className="container height-full">
                <div className="row height-full justify-flex-end align-content-flex-end">
                    <div className="col-12-xs col-12-lg">
                        <div className="row">
                            <div className="col-12-xs">
                                {repos.map((repo) => (
                                    <div
                                        className="project-container"
                                        key={repo.id}
                                    >
                                        <p className="project-info mr-3">
                                            {formatDateString(repo.created_at)}
                                        </p>
                                        <p className="project-name">
                                            {repo.name}
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
