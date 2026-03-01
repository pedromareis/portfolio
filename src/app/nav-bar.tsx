import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import { useState } from "react";
import { DownloadIcon, Icon, PaletteIcon } from "lucide-react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

const BLUR_FADE_DELAY = 0.04;

export const NavBar = ({ setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("experience");

  return (
    <nav className="w-full flex items-center justify-between px-20 py-5">
      <div className="flex gap-4 items-center">
        <BlurFade delay={BLUR_FADE_DELAY} className="h-[36px]">
          <Avatar className="size-[36px] mt-1 bg-white shadow-lg items-center">
            <AvatarImage
              alt={"Pedro Reis"}
              src={"/pedro_avatar.png"}
              className="object-cover"
            />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </BlurFade>
        Pedro Reis
      </div>
      <div className="rounded-full bg-[#f9f9f9] p-1">
        <button
          className={`px-6 py-2 text-base ${selected === "experience" ? "rounded-full bg-white shadow-sm text-black" : "text-gray-400"} hover:text-black`}
          onClick={() => setSelected("experience")}
        >
          Experience
        </button>
        <button
          className={`px-6 py-2 text-base ${selected === "tech-stack" ? "rounded-full bg-white shadow-sm text-black" : "text-gray-400"} hover:text-black`}
          onClick={() => setSelected("tech-stack")}
        >
          Tech Stack
        </button>
        <button
          className={`px-6 py-2 text-base ${selected === "projects" ? "rounded-full bg-white shadow-sm text-black" : "text-gray-400"} hover:text-black`}
          onClick={() => setSelected("projects")}
        >
          Projects
        </button>
      </div>

      <div className="flex gap-2">
        <div className="rounded-full bg-[#f9f9f9] p-1 ">
          <button
            className={`flex gap-2 px-6 py-2 text-base rounded-full bg-white shadow-sm text-gray-400 hover:text-black`}
            onClick={() => setSelected("projects")}
          >
            <DownloadIcon name="cv" size={"20px"} />
            CV
          </button>
        </div>

        <div className="rounded-full bg-[#f9f9f9] p-1">
          <button
            className={` flex gap-2 px-6 py-2 text-base rounded-full bg-white shadow-sm text-gray-400 hover:text-black`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setTimeout(() => setIsOpen(false), 2000)}
          >
            <PaletteIcon name="github" size={"20px"} />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => setTheme("anti")}
                >
                  Anti
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => setTheme("mbdtf")}
                >
                  MBDTF
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => setTheme("aquarius")}
                >
                  Aquarius
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
