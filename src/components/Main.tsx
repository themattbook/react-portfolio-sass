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

        const intervalId = setInterval(updatePhrase, 5000);
        return () => clearInterval(intervalId);
    }, [phrases]);
    return (
        <div className="main height-screen">
            <main className="row align-content-center container height-full">
                <div className="row justify-center align-items-center">
                    <div className="col-12-xs col-2-lg second">
                        <div className="row-col align-content-center justify-center">
                            <h1>
                                <FaReact className="mr-3 icon" />
                            </h1>
                            <h1>
                                <FaVuejs className="mr-3 icon" />
                            </h1>
                            <h1>
                                <FaSass className="mr-3 icon" />
                            </h1>
                            <h1>
                                <SiTailwindcss className="mr-3 icon" />
                            </h1>
                        </div>
                    </div>
                    <div className="col-12-xs col-8-lg">
                        <h2>
                            I&apos;m Matt. I&apos;m a FullStack Developer who
                            loves UI/UX, Minimalism, and{" "}
                            <span className="phrase">{phrase}</span>
                        </h2>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
