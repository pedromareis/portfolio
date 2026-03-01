export const EducationSection = ({ color }: { color: string }) => {
  return (
    <section
      id="education"
      className="relative p-20 font-gt-standard text-sm gap-4 flex flex-col"
      style={{
        color: "white",
        backgroundColor: color,
      }}
      // className="m-20 rounder-md p-20 font-gt-standard text-sm gap-4 flex flex-col border-[1px] border-grey rounded-3xl"
    >
      <div className="z-10">
        <h1 className="text-xl font-bold">Education.</h1>

        <table className="w-full">
          <tr className="text-left border-b-[1px] border-white h-16">
            <td>Msc in Informatics and Systems</td>
            <td>Polytechnic University of Coimbra - ISEC⁠</td>
            <td>2017 - 2021</td>
          </tr>
          <tr className="text-left h-16">
            <td>BSc in Informatics Engineering</td>
            <td>Polytechnic University of Coimbra - ISEC⁠</td>
            <td>2013 - 2017</td>
          </tr>
        </table>
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
