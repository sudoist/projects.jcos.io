
'use client'

import Link from "next/link";
import React from "react";
import { useSearchParams } from 'next/navigation'
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export default function Home() {

  const searchParams = useSearchParams()
 
  const type = searchParams.get('type')
 
  const stack = searchParams.get('stack')

  const featured = allProjects.find((project) => project.slug === "lms-laravel")!;
  const top2 = allProjects.find((project) => project.slug === "ordering-poc")!;
  const top3 = allProjects.find((project) => project.slug === "payroll-laravel")!;
  const sorted = allProjects
      .filter((p) => p.published)
      .filter(
          (project) =>
              project.slug !== featured.slug &&
              project.slug !== top2.slug &&
              project.slug !== top3.slug &&
              project.filter.type === type &&
              project.filter.stack === stack,
      )
      .sort(
          (a, b) =>
              new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
              new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
      );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Filtered work and personal projects are listed below. &nbsp;
            <Link href="https://projects.jcos.io/" className="duration-200 text-zinc-400 hover:text-zinc-100 underline">Click here for the default list.</Link>
          </p>
        </div>
        {/* <div className="w-full h-px bg-zinc-800" /> */}
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
            Filtered for {type?.toUpperCase()}{"(" + stack?.toUpperCase() + ")"}
          </h2>
        {/* <div className="hidden w-full h-px md:block bg-zinc-800" /> */}

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );

}
