"use client";
import React, { useState } from "react";
import Image from "next/image";
import projects from "../../data/projects.json";

export default function Page({ params }) {
  const project = projects.filter(
    (p) => p.slug === params["project-slug"]
  )?.[0];
  return (
    <main className="flex min-h-screen flex-col p-24 gap-[16px]">
      <Image
        src={project?.image}
        alt={`project-logo-${project?.title}`}
        width={64}
        height={64}
      />
      <div className="text-4xl font-bold">{project.title}</div>
      <div>{project.description}</div>

      <Image
        src={
          "https://noteonline.pt/cdn/shop/files/LP_LE_banner_mobile_2_800x.png?v=1726493638"
        }
        alt={`project-logo-${project?.title}`}
        width={512}
        height={128}
      />
    </main>
  );
}
