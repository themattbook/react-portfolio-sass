import history from "../assets/data/history.json";

function Resume() {
    return (
        <section className="flex is-center h-screen p-4">
            <div className="responsive-half">
                <ul>
                    {history.map((job, index) => {
                        return (
                            <li key={index} className="mb-5">
                                <p className="accent">{job.year}</p>
                                <h5>{job.company}</h5>
                                <p className="text-md">
                                    <a href={job.url} target="_blank">
                                        {job.url}
                                    </a>
                                </p>
                                <p className="text-lg mt-3">{job.desc}</p>
                                <p className="text-md secondary mt-3">
                                    Technology used: {job.technology}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Resume;
