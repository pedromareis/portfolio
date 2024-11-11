"use client";

import React, { useState } from "react";
import { CustomCard } from "@/components/custom-card";

import projects from "../data/projects.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-white">
      <div className="mb-[16px] w-full">
        <CustomCard
          project={{
            image:
              "https://media.licdn.com/dms/image/v2/C4D03AQGXVqKcgLOswA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628973537338?e=1733356800&v=beta&t=ssNxtL2EnUbREqU5FcVTa4zZIn1C-XunESrGIN_hiFk",
            title: "Pedro Reis",
            description: "Head of Frontend and Mobile",
          }}
          showReadMore={false}
        />
      </div>

      <div className="grid gap-[16px] xl:grid-cols-2  2xl:grid-cols-3">
        {projects.map((project) => {
          return (
            <CustomCard
              key={project.id}
              project={project}
              showReadMore={true}
            />
          );
        })}
      </div>
    </main>
  );
}
