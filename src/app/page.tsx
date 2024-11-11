"use client";

import React, { useState } from "react";
import { CustomCard } from "@/components/custom-card";

import projects from "../data/projects.json";

import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import {
  BentoProvider,
  Body,
  Card,
  Columns,
  IconBell,
  IconHome,
  IconStar,
  IconUser,
  Navigation,
  Placeholder,
  Stack,
  Tiles,
  Title,
} from "@buildo/bento-design-system";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: PersonIcon,
    name: "Save your files",
    // children: () => <p>teste</p>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-5",
  },
  // {
  //   Icon: GlobeIcon,
  //   name: "Multilingual",
  //   description: "Supports 100+ languages and counting.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  // },
  // {
  //   Icon: CalendarIcon,
  //   name: "Calendar",
  //   description: "Use the calendar to filter your files by date.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  // },
  // {
  //   Icon: BellIcon,
  //   name: "Notifications",
  //   description:
  //     "Get notified when someone shares a file or mentions you in a comment.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  // },
];

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-white">
    //   <div className="mb-[16px] w-full">
    //     <CustomCard
    //       project={{
    //         image:
    //           "https://media.licdn.com/dms/image/v2/C4D03AQGXVqKcgLOswA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628973537338?e=1733356800&v=beta&t=ssNxtL2EnUbREqU5FcVTa4zZIn1C-XunESrGIN_hiFk",
    //         title: "Pedro Reis",
    //         description: "Head of Frontend and Mobile",
    //       }}
    //       showReadMore={false}
    //     />
    //   </div>

    //   <div className="grid gap-[16px] xl:grid-cols-2  2xl:grid-cols-3">
    //     {projects.map((project) => {
    //       return (
    //         <CustomCard
    //           key={project.id}
    //           project={project}
    //           showReadMore={true}
    //         />
    //       );
    //     })}

    //   </div>
    // </main>

    <main className="p-6">
      <BentoProvider defaultMessages={defaultMessages}>
        <div className="flex items-center justify-center mb-6">
          <Navigation
            size="large"
            kind="icon"
            destinations={[
              {
                label: "Home",
                href: "http://localhost:3001",
                icon: () => <IconHome size={24} />,
                active: true,
              },
              {
                label: "SFM",
                href: "http://localhost:3001",
                icon: () => <IconUser size={24} />,
              },
              {
                label: "",
                href: "http://localhost:3001",
                icon: () => <IconBell size={24} />,
              },
              {
                label: "SFM",
                href: "http://localhost:3001",
                icon: () => <IconBell size={24} />,
              },
              {
                label: "Contacts",
                href: "http://localhost:3001",
                icon: () => <IconStar size={24} />,
              },
            ]}
          />
        </div>
        <div>
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
          {/* <Tiles
            space={{
              mobile: 8,
              tablet: 16,
              desktop: 32,
              wide: 32,
            }}
            columns={{
              mobile: 1,
              tablet: 2,
              desktop: 4,
              wide: 6,
            }}
          >
            <Card elevation="small" borderRadius={16}>
              <Stack space={8}>
                <Title size="large">This is a card!</Title>
                <Body size="large">This is a description.</Body>
              </Stack>
            </Card>
            <Card elevation="small" borderRadius={16}>
              <Stack space={8}>
                <Title size="large">This is a card!</Title>
                <Body size="large">This is a description.</Body>
              </Stack>
            </Card>
          </Tiles> */}
        </div>
      </BentoProvider>
    </main>
  );
}
