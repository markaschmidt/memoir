"use client";

import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ProjectSkill } from "@/types/project";
import { cn } from "@/lib/utils";

type ProjectSkillsTableProps = {
  skills: ProjectSkill[];
};

type SortKey = "name" | "category";
type SortDirection = "asc" | "desc";

function compareSkills(
  left: ProjectSkill,
  right: ProjectSkill,
  sortKey: SortKey,
  direction: SortDirection
) {
  const factor = direction === "asc" ? 1 : -1;

  if (sortKey === "name") {
    return (
      left.name.localeCompare(right.name, undefined, {
        sensitivity: "base",
      }) * factor
    );
  }

  return (
    left.category.localeCompare(right.category, undefined, {
      sensitivity: "base",
    }) * factor
  );
}

export function ProjectSkillsTable({ skills }: ProjectSkillsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortedRows = useMemo(() => {
    const next = [...skills];
    next.sort((left, right) =>
      compareSkills(left, right, sortKey, sortDirection)
    );
    return next;
  }, [skills, sortDirection, sortKey]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection("asc");
  }

  function sortLabel(key: SortKey, label: string) {
    const active = sortKey === key;
    const arrow = active ? (sortDirection === "asc" ? " ↑" : " ↓") : "";

    return (
      <button
        type="button"
        onClick={() => handleSort(key)}
        className={cn("type-sort-header", active && "type-sort-header-active")}
      >
        {label}
        {arrow}
      </button>
    );
  }

  if (!skills.length) {
    return null;
  }

  return (
    <div className="space-y-3">
      <p className="type-eyebrow">Skills attained</p>
      <div className="overflow-hidden rounded-xl border border-ink/10">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>{sortLabel("name", "Skill")}</TableHead>
              <TableHead>{sortLabel("category", "Category")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedRows.map((skill) => (
              <TableRow key={skill.name}>
                <TableCell className="type-table-emphasis whitespace-normal">
                  {skill.name}
                </TableCell>
                <TableCell className="type-table-cell whitespace-normal">
                  {skill.category}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
