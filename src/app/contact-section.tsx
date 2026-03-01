export const ContactSection = ({ color }: { color: string }) => {
  return (
    <section
      id="contact"
      className="relative p-20 font-gt-standard text-sm gap-4 flex flex-col"
      style={{
        color: "white",
        backgroundColor: color,
      }}
      // className="m-20 rounder-md p-20 font-gt-standard text-sm gap-4 flex flex-col border-[1px] border-grey rounded-3xl"
    >
      <div className="z-10">
        <h1 className="text-xl font-bold mb-4">Contact me.</h1>

        <div className="text-black">
          {/* Contact form */}
          <input
            type="text"
            placeholder="Your name"
            className="w-full mb-4 p-2 rounded-md bg-[#f9f9f9] border-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full mb-4 p-2 rounded-md bg-[#f9f9f9] border-none"
          />
          <textarea
            placeholder="Your message"
            className="w-full mb-4 p-2 rounded-md bg-[#f9f9f9] border-none h-32"
          ></textarea>
          <button className="px-6 py-2 text-base rounded-full bg-white shadow-sm text-gray-400 hover:text-black">
            Send Message
          </button>
        </div>
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
