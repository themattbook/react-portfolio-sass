function Main() {
    return (
        <main className="h-screen p-4">
            <div className="responsive-half left-half h-full centered relative">
                <img
                    src="../public/developer.svg"
                    className="hero-img"
                    alt="developer"
                />
            </div>
            <div className="responsive-half right-half h-full ml-auto">
                <h5 className="mt-5">
                    I&apos;m Matt. I&apos;m a{" "}
                    <span className="accent">FullStack Developer</span> who
                    loves UI/UX. I specialize in React and Vue, TypeScript,
                    Sass, and Tailwindcss.
                </h5>
                <p className="text-xl secondary pt-5">
                    I enjoy simplistic and modern, yet minimal design. Since
                    discovering what Sass can do, I&apos;ve started migrating
                    away from Tailwindcss and into more maintainable digs.
                </p>
                <p className="text-xl secondary pt-5">
                    Below you will find an abridged resume as well as links to
                    some of the standard places someone in your position may be
                    inclined to look. If you&apos;re interested in working with
                    me, please reach out. I love meeting new people.
                </p>
            </div>
        </main>
    );
}

export default Main;
