"use client";

import BlurFade from "@/components/magicui/blur-fade";
import TypingText from "@/components/typing-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { MeshGradient } from "@mesh-gradient/react";
import { extractColors } from "extract-colors";
import { useEffect, useState } from "react";
import { NavBar } from "./nav-bar";
import { AboutSection } from "./about-section";
import { ExperienceSection } from "./experience-section";
import { EducationSection } from "./education-section";
import { ProjectsSection } from "./projects-section";
import { ContactSection } from "./contact-section";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

const antiColors = ["#d22d29", "#736968", "#b1a7a6", "#211d1a", "#e8e8e8"];
const mbdtfColors = [
  "baac9b",
  "#2bb49f",
  "#007830",
  "#f5c998",
  "#360307",
  "#707070",
  "#dc0b34",
];
const aquariusColors = ["#6ea9af", "#206463", "#bedcde", "#101413"];

export default function Page() {
  const [image, setImage] = useState<string>("");
  const [colors, setColors] = useState<string[]>([]);
  const [theme, setTheme] = useState<string>("anti");

  const [sectionColors, setSectionColors] = useState<string[]>([
    "#204349",
    "#baac9b",
    "#010101",
    "#010101",
  ]);

  useEffect(() => {
    setSectionColors(
      theme === "anti"
        ? antiColors
        : theme === "mbdtf"
          ? mbdtfColors
          : theme === "aquarius"
            ? aquariusColors
            : sectionColors,
    );
  }, [theme]);

  const getMainColorsFromImage = (imageUrl: string): string[] => {
    const src = imageUrl;

    extractColors(src)
      .then((colors) => {
        console.log(colors);
        setColors(colors.map((c) => c.hex));
        setSectionColors(colors.map((c) => c.hex));
      })
      .catch(console.error);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let src = URL.createObjectURL(event.target.files[0]);
      setImage(src);
      console.log(event.target.files[0]);
      getMainColorsFromImage(src);
    }
  };

  return (
    <div>
      <div className="absolute top-0 right-0 w-[100vw] font-sans">
        <main className="flex flex-col max-h-screen space-y-10">
          <NavBar setTheme={(theme: string) => setTheme(theme)} />

          {/* <input type="file" onChange={onImageChange} className="mb-4" /> */}

          <section id="header" className="relative px-20 py-10">
            <MeshGradient
              options={{
                seed: 1,
                colors: sectionColors,
                isStatic: true,
              }}
              style={{ width: "100%", margin: 0, borderRadius: "32px" }}
              className="rounded-sm"
            ></MeshGradient>
            <div
              className="absolute inset-0 opacity-20 rounded-[32px]"
              style={{
                margin: "40px 80px",
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-sm">
              <BlurFade delay={BLUR_FADE_DELAY} className="mb-4">
                <Avatar className="size-28 bg-white shadow-lg">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="ml-[-2px] object-cover"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
              <p className="text-white text-5xl font-bold mb-4">
                Hi, I'm <span className="font-serif text-5xl">Pedro</span>
              </p>
              <TypingText
                text={[
                  "Engineering Manager",
                  "Team Lead",
                  "Senior Frontend Engineer",
                  "Senior Mobile Engineer",
                ]}
                className="text-white text-3xl font-sans font-medium"
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-white"
              />
            </div>
          </section>

          <div className="font-gt-standard">
            <AboutSection color={sectionColors[0]} />
            <ExperienceSection color={sectionColors[1]} />
            <EducationSection color={sectionColors[2]} />
            <ProjectsSection color={sectionColors[3]} />
            <ContactSection color={sectionColors[0]} />
          </div>
        </main>
      </div>
    </div>
  );
}
