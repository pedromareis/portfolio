export const AboutSection = ({ color }: { color: string }) => {
  return (
    <section
      id="about"
      className="relative p-20 gap-4 flex flex-col"
      style={{
        color: "white",
        backgroundColor: color,
      }}
    >
      <div className="z-10">
        <h1 className="font-bold text-xl mb-4">About me.</h1>
        <p className="font-normal text-sm">
          I am currently a Senior Frontend Engineer at XING, a strategic move I
          made to master enterprise-level engineering standards and high-scale
          collaboration. I am now looking into going back to a management
          position here I can keep hands-on with tech while helping teams grow.
          <br />
          <br />
          With over 10 years of experience building modular web and mobile apps
          with reusable component systems that enable cross-team scalability,
          I’ve learned that every challenge has more than one good solution, and
          I love finding creative ways to solve them.
          <br />
          <br />
          I’m always bringing new ideas to the table, whether it’s improving
          processes, refining UX, or rethinking how we work and evolve as a
          team. I enjoy mentoring, leading by example, and fostering a great
          work environment.
        </p>
      </div>

      <div
        className="absolute inset-0 opacity-20 h-full"
        style={{
          margin: "0px 0px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </section>
  );
};
