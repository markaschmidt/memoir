"use client";

import { useMemo, useState } from "react";
import { BookCover } from "@/components/book";
import { ContentBadge } from "@/components/content";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Book } from "@/lib/literature-data";
import { cn } from "@/lib/utils";

type LiteratureTableProps = {
  title: string;
  description?: string;
  rows: Book[];
  showClassification?: boolean;
};

type SortDirection = "asc" | "desc";

const CLASSIFICATION_COLORS: Record<string, string> = {
  Fiction: "bg-indigo-100/80 text-indigo-950",
  "Non-Fiction": "bg-teal-100/80 text-teal-950",
};

export function LiteratureTable({
  title,
  description,
  rows,
  showClassification = false,
}: LiteratureTableProps) {
  const [categorySortDirection, setCategorySortDirection] =
    useState<SortDirection>("asc");

  const sortedRows = useMemo(() => {
    const next = [...rows];
    const factor = categorySortDirection === "asc" ? 1 : -1;

    next.sort(
      (left, right) =>
        left.category.localeCompare(right.category, undefined, {
          sensitivity: "base",
        }) * factor
    );

    return next;
  }, [categorySortDirection, rows]);

  function toggleCategorySort() {
    setCategorySortDirection((current) =>
      current === "asc" ? "desc" : "asc"
    );
  }

  const categorySortLabel =
    categorySortDirection === "asc" ? "Category ↑" : "Category ↓";

  return (
    <section className="section-stack">
      <div className="section-header">
        <h2 className="type-section-title">{title}</h2>
        {description ? <p className="type-section-desc">{description}</p> : null}
      </div>

      <div className="surface-panel">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[3.5rem]">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>
                <button
                  type="button"
                  onClick={toggleCategorySort}
                  className="type-sort-header type-sort-header-active"
                >
                  {categorySortLabel}
                </button>
              </TableHead>
              <TableHead>Genre</TableHead>
              <TableHead className="min-w-[12rem]">Value</TableHead>
              {showClassification ? <TableHead>Type</TableHead> : null}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedRows.length ? (
              sortedRows.map((book) => (
                <TableRow key={`${book.title}-${book.author}`}>
                  <TableCell>
                    <BookCover
                      title={book.title}
                      coverUrl={book.coverUrl}
                      coverFallbackUrls={book.coverFallbackUrls}
                    />
                  </TableCell>
                  <TableCell className="type-table-emphasis max-w-[10rem] whitespace-normal">
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-subtle"
                    >
                      {book.title}
                    </a>
                  </TableCell>
                  <TableCell className="type-table-cell max-w-[9rem] whitespace-normal">
                    {book.author}
                  </TableCell>
                  <TableCell>
                    <ContentBadge
                      label={book.category}
                      tag
                      color={book.categoryColor}
                    />
                  </TableCell>
                  <TableCell className="type-table-cell max-w-[9rem] whitespace-normal">
                    {book.genre}
                  </TableCell>
                  <TableCell className="type-table-body whitespace-normal">
                    {book.value}
                  </TableCell>
                  {showClassification ? (
                    <TableCell>
                      {book.classification ? (
                        <ContentBadge
                          label={book.classification}
                          tag
                          color={
                            CLASSIFICATION_COLORS[book.classification] ??
                            "badge-neutral"
                          }
                        />
                      ) : (
                        "—"
                      )}
                    </TableCell>
                  ) : null}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={showClassification ? 7 : 6}
                  className="type-caption py-10 text-center"
                >
                  No entries yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
