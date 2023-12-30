import { useState, useEffect } from "react";
import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import phrasesData from "../assets/data/phrases.json";

function Main() {
    const [phrase, setPhrase] = useState<string | undefined>(undefined);
    const phrases: string[] = phrasesData;

    useEffect(() => {
        const updatePhrase = () => {
            const random = Math.floor(Math.random() * phrases.length);
            setPhrase(phrases[random]);
        };
        updatePhrase();

        const intervalId = setInterval(updatePhrase, 10000);
        return () => clearInterval(intervalId);
    }, [phrases]);
    return (
        <div className="main height-screen">
            <main className="container height-full">
                <div className="row height-full align-center">
                    <div className="col-1-xs col-5-lg height-full logo-container"></div>
                    <div className="col-12-xs col-7-lg">
                        <h2 className="mt-5">
                            I&apos;m Matt. I&apos;m a FullStack Developer who
                            loves UI/UX, Minimalism, and{" "}
                            <span className="phrase">{phrase}</span>
                        </h2>
                        <div className="row justify-flex-end mt-5">
                            <div className="col-12-xs col-12-lg">
                                <div className="row gap-2 justify-flex-end">
                                    <div className="col-12-xs col-6-sm">
                                        <div className="card">
                                            <p className="card-title">
                                                <FaReact className="mr-3 icon" />{" "}
                                                React
                                            </p>
                                            <p className="card-body">
                                                My favorite framework. I have
                                                extensive experience creating
                                                React applications.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12-xs col-6-sm">
                                        <div className="card">
                                            <p className="card-title">
                                                <FaVuejs className="mr-3 icon" />{" "}
                                                Vue
                                            </p>
                                            <p className="card-body">
                                                Nothing beats Vue 3, TypeScript,
                                                and Pinia for building fast,
                                                reactive applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12-xs col-12-lg">
                                <div className="row gap-2 justify-flex-end">
                                    <div className="col-12-xs col-6-sm">
                                        <div className="card">
                                            <p className="card-title">
                                                <FaSass className="mr-3 icon" />{" "}
                                                Sass
                                            </p>
                                            <p className="card-body">
                                                I&apos;ve learned to embrace it
                                                for it&apos;s flexibility and
                                                elegance without inline selector
                                                pollution.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12-xs col-6-sm">
                                        <div className="card">
                                            <p className="card-title">
                                                <SiTailwindcss className="mr-3 icon" />{" "}
                                                Tailwind
                                            </p>
                                            <p className="card-body">
                                                I love it because it&apos;s easy
                                                to work with. I have
                                                professional experience building
                                                SPA&apos;s with Tailwind.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
