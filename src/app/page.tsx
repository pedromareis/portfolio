"use client";

import { Header } from "@/components/marketing/header-navigation/header";
import { ArrowRight } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Projects } from "@/components/projects";
import FlipWords from "@/components/flip-words";

export default function Page() {
  return (
    <main>
      <section id="header">
        <Header
          items={[
            { label: "About Me", href: "#aboutme" },
            { label: "Tech Stack", href: "#techstack" },
            {
              label: "Projects",
              href: "#projects",
              // menu: (
              //   <DropdownMenuSimple
              //     items={[
              //       {
              //         title: "Web",
              //         subtitle: "Web platforms.",
              //         href: "/mobile",
              //       },
              //       {
              //         title: "Mobile",
              //         subtitle: "Mobile applications.",
              //         href: "/mobile",
              //       },
              //     ]}
              //   />
              // ),
            },
          ]}
        />
      </section>

      <section
        id="header"
        className="relative bg-primary py-16 lg:flex lg:min-h-180 lg:items-center lg:py-24"
      >
        <div className="mx-auto flex w-full max-w-container items-center px-4 md:px-8">
          <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pr-8">
            {/* <a
              href="#"
              className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <BadgeGroup
                className="hidden md:flex"
                size="lg"
                addonText="We're hiring!"
                iconTrailing={ArrowRight}
                theme="modern"
                color="brand"
              >
                Join our remote team
              </BadgeGroup>
              <BadgeGroup
                className="md:hidden"
                size="md"
                addonText="We're hiring!"
                iconTrailing={ArrowRight}
                theme="modern"
                color="brand"
              >
                Join our remote team
              </BadgeGroup>
            </a> */}

            <img
              src="pedro_avatar.png"
              alt="Pedro Reis Avatar"
              className="h-40 w-40 rounded-full mb-4 object-cover"
            />

            <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
              👋 Hi, I'm Pedro!
            </h1>
            <p className="mt-4 mb-4 text-3xl text-balance text-tertiary md:mt-6 md:max-w-lg md:text-xl">
              <FlipWords
                words={[
                  "Engineering Manager",
                  "Team Lead",
                  "Senior Frontend Engineer",
                  "Senior Mobile Engineer",
                ]}
                className="text-purple-400 p-0 text-3xl font-extrabold"
              />
            </p>
            <p className="text-3xl text-balance text-tertiary md:max-w-lg md:text-xl">
              with a big passion for building beautiful web and mobile
              applications and to turn teams into high-performing units.
            </p>

            {/* <Form
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log("Form data:", data);
              }}
              className="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
            >
              <Input
                isRequired
                size="md"
                name="email"
                type="email"
                wrapperClassName="py-0.5"
                placeholder="Enter your email"
                hint={
                  <span>
                    We care about your data in our{" "}
                    <a
                      href="#"
                      className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      privacy policy
                    </a>
                    .
                  </span>
                }
              />
              <Button type="submit" size="xl">
                Get started
              </Button>
            </Form> */}
          </div>
        </div>
        {/* <div className="relative mt-16 h-60 w-full px-4 md:h-95 md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
          <img
            className="inset-0 size-full object-cover lg:absolute"
            src="https://www.untitledui.com/marketing/spirals.webp"
            alt="Spirals"
          />
        </div> */}
      </section>

      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
