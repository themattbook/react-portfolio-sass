import history from "../assets/data/history.json";

function Resume() {
    return (
        <section className="flex min-h-screen w-full is-center mt-5 p-4">
            <div className="h-full w-full">
                <ul className="flex flex-col is-center">
                    {history.map((job, index) => {
                        return (
                            <li
                                key={index}
                                className="mr-3 mt-5 list-item w-75"
                            >
                                <p className="font-bold">{job.year}</p>
                                <h5>{job.company}</h5>
                                <p className="mt-1">
                                    <a href={job.url} target="_blank">
                                        {job.url}
                                    </a>
                                </p>
                                <p className="text-xl mt-3">{job.desc}</p>
                                <p className="text-md secondary mt-3">
                                    Technology: {job.technology}
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
