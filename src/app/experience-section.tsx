export const ExperienceSection = ({ color }: { color: string }) => {
  return (
    <section
      id="experience"
      className="relative p-20 font-gt-standard text-sm gap-4 flex flex-col"
      style={{
        color: "white",
        backgroundColor: color,
      }}
      // className="m-20 rounder-md p-20 font-gt-standard text-sm gap-4 flex flex-col border-[1px] border-grey rounded-3xl"
    >
      <div
        className="absolute inset-0 opacity-20 h-full"
        style={{
          margin: "0px 0px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="z-10">
        <h1 className="text-xl font-bold">Experience.</h1>

        <div>
          <table className="w-full">
            <tr className="text-left border-b-[1px] border-white h-16">
              <td>Senior Frontend Engineer</td>
              <td>XING Marketing Solutions</td>
              <td>2025 - Present</td>
            </tr>
            <tr className="text-left  border-b-[1px] border-white h-16">
              <td>Invited Assistant Professor</td>
              <td>Polytechnic University of Coimbra (ESTGOH & ISEC)</td>
              <td>2021 - Present</td>
            </tr>
            <tr className="text-left  border-b-[1px] border-white h-16">
              <td>Head of Frontend & Mobile</td>
              <td>LoopOS (part of The Loop Co.)</td>
              <td>2021 - 2025</td>
            </tr>
            <tr className="text-left  border-b-[1px] border-white h-16">
              <td>Frontend Web & Mobile Engineer</td>
              <td>The Loop Co.</td>
              <td>2020 - 2021</td>
            </tr>
            <tr className="text-left h-16">
              <td>Mobile Developer</td>
              <td>Spotside (former Crossing Answers/Luope)</td>
              <td>2016 - 2020</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};
