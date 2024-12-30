/**
 * @copyright 2024 - Reza Reynaldo Hutagaol
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Project done',
    number: 10,
  },
  {
    label: 'Years of experience',
    number: 3,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Reza Reynaldo Hutagaol, a professional backend
            developer passionate about building robust, scalable, and efficient
            systems. With a strong foundation in problem-solving and technical
            expertise, I specialize in transforming complex requirements into
            seamless, high-performance backend solutions that power exceptional
            user experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              className="ml-auto md:3-[40px] md:h-[40px]"
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
