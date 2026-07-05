"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/animations/fade-in";
import { ProjectCard } from "./card";
import {
  ProjectSortFilter,
  type ProjectSortDirection,
  type ProjectSortKey,
} from "./sort-filter";
import type { ProjectProps } from "@/types/project";
import { getProjectProgressPercent } from "@/lib/project-progress";

type ProjectsSectionProps = {
  projects: ProjectProps[];
};

function compareProjects(
  left: ProjectProps,
  right: ProjectProps,
  sortKey: ProjectSortKey,
  direction: ProjectSortDirection
) {
  const factor = direction === "asc" ? 1 : -1;

  switch (sortKey) {
    case "progress":
      return (
        (getProjectProgressPercent(left.status.milestones) -
          getProjectProgressPercent(right.status.milestones)) *
        factor
      );
    case "title":
      return (
        left.title.localeCompare(right.title, undefined, {
          sensitivity: "base",
        }) * factor
      );
    case "startDate":
      return (
        (new Date(left.startDate).getTime() -
          new Date(right.startDate).getTime()) *
        factor
      );
    default:
      return 0;
  }
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [sortKey, setSortKey] = useState<ProjectSortKey>("startDate");
  const [sortDirection, setSortDirection] =
    useState<ProjectSortDirection>("desc");

  const sortedProjects = useMemo(() => {
    const next = [...projects];
    next.sort((left, right) =>
      compareProjects(left, right, sortKey, sortDirection)
    );
    return next;
  }, [projects, sortDirection, sortKey]);

  function handleSort(key: ProjectSortKey) {
    if (sortKey === key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection(key === "title" ? "asc" : "desc");
  }

  return (
    <div className="space-y-10">
      <div className="section-stack">
        <div className="section-header">
          <h2 className="type-section-title">All projects</h2>
          <p className="type-section-desc">
            Sort by progress, title, or start date.
          </p>
        </div>

        <ProjectSortFilter
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
      </div>

      {sortedProjects.map((project, index) => (
        <FadeIn key={project.title} delay={180 + index * 140}>
          <ProjectCard {...project} />
        </FadeIn>
      ))}
    </div>
  );
}
