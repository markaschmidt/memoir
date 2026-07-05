"use client";

import Image from "next/image";
import { useState } from "react";
import { ExpandablePanel } from "@/animations/expandable-panel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContentBadge } from "@/components/content";
import { ProjectBlog } from "./blog";
import { ProjectStatusBar } from "./status";
import { GitHubIcon, TechIcon } from "@/icons";
import type { ProjectProps } from "@/types/project";
import { formatProjectDateRange } from "@/lib/project-dates";
import { cn } from "@/lib/utils";

export function ProjectCard({
  title,
  description,
  githubUrl,
  logo,
  startDate,
  endDate,
  status,
  skills,
  blog,
  collaborators,
  techStack,
  tags,
  className,
}: ProjectProps) {
  const [blogOpen, setBlogOpen] = useState(false);
  const hasBlog = Boolean(blog?.length);

  return (
    <Card className={cn("surface-card overflow-hidden", className)}>
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <div className="surface-logo-lg">
              <Image
                src={logo}
                alt={`${title} logo`}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 pt-2">
              <CardTitle className="type-card-title">{title}</CardTitle>
              <p className="type-caption-muted mt-1">
                {formatProjectDateRange(startDate, endDate)}
              </p>
            </div>
          </div>
          <ContentBadge
            label="GitHub"
            href={githubUrl}
            color="badge-inverse"
            icon={<GitHubIcon className="size-3.5 text-paper-elevated" />}
          />
        </div>
        {tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <ContentBadge key={tag.label} {...tag} tag />
            ))}
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="type-body">
            {description}
            {hasBlog ? (
              <>
                {" "}
                <button
                  type="button"
                  className="type-action inline underline-offset-2 hover:underline"
                  aria-expanded={blogOpen}
                  onClick={() => setBlogOpen((open) => !open)}
                >
                  {blogOpen ? "Show less" : "Read more"}
                </button>
              </>
            ) : null}
          </p>
          {hasBlog ? (
            <ExpandablePanel open={blogOpen}>
              <div className="blog-expanded">
                <ProjectBlog blocks={blog!} />
              </div>
            </ExpandablePanel>
          ) : null}
        </div>

        <ProjectStatusBar status={status} skills={skills} />

        {collaborators?.length ? (
          <div className="space-y-2">
            <p className="type-eyebrow">Collaborators</p>
            <ul className="space-y-1 type-caption">
              {collaborators.map((person) => (
                <li key={person.name}>
                  {person.name}
                  {person.role ? (
                    <span className="text-muted-soft"> · {person.role}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <Accordion type="single" collapsible className="surface-muted">
          <AccordionItem value="tech">
            <AccordionTrigger className="type-label">
              Tech Used
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Technology</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {techStack.map((tech) => (
                    <TableRow key={tech.name}>
                      <TableCell className="type-table-emphasis">
                        <span className="inline-flex items-center gap-2">
                          <TechIcon name={tech.name} className="size-4" />
                          {tech.name}
                        </span>
                      </TableCell>
                      <TableCell>{tech.category}</TableCell>
                      <TableCell className="type-table-cell">
                        {tech.notes ?? "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
