"use client";

import { useEffect, useRef, useState } from "react";
import {
  STEAM_WORKSHOP_SCRIPT_URL,
  WORKSHOP_WIDGET_STYLE,
} from "@/lib/game-development-data";

type WorkshopGridProps = {
  itemIds: readonly string[];
};

let workshopScriptPromise: Promise<void> | null = null;

function loadSteamWorkshopScript() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (customElements.get("steam-workshop")) {
    return Promise.resolve();
  }

  if (!workshopScriptPromise) {
    workshopScriptPromise = fetch(STEAM_WORKSHOP_SCRIPT_URL)
      .then((response) => response.text())
      .then((code) => {
        const browserCode = code.split("module.exports")[0];
        const script = document.createElement("script");
        script.textContent = browserCode;
        document.head.appendChild(script);
      });
  }

  return workshopScriptPromise;
}

function createWorkshopElement(itemId: string) {
  const element = document.createElement("steam-workshop");
  element.setAttribute("itemid", itemId);
  element.setAttribute("style-border", WORKSHOP_WIDGET_STYLE.border);
  element.setAttribute("style-shadow", WORKSHOP_WIDGET_STYLE.shadow);
  element.setAttribute(
    "style-color-background",
    WORKSHOP_WIDGET_STYLE.colorBackground
  );
  element.setAttribute("style-color-title", WORKSHOP_WIDGET_STYLE.colorTitle);
  element.setAttribute(
    "style-color-description",
    WORKSHOP_WIDGET_STYLE.colorDescription
  );
  element.setAttribute(
    "style-color-stats-count",
    WORKSHOP_WIDGET_STYLE.colorStatsCount
  );
  element.setAttribute(
    "style-color-stats-label",
    WORKSHOP_WIDGET_STYLE.colorStatsLabel
  );
  element.setAttribute("viewtext", "View on Steam Workshop");
  return element;
}

export function WorkshopGrid({ itemIds }: WorkshopGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadSteamWorkshopScript()
      .then(() => {
        if (cancelled || !gridRef.current) return;

        gridRef.current.replaceChildren();
        itemIds.forEach((itemId) => {
          gridRef.current?.appendChild(createWorkshopElement(itemId));
        });
        setReady(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [itemIds]);

  if (failed) {
    return (
        <p className="type-body">
          Workshop widgets could not be loaded. You can browse the addons on{" "}
          <a
            href="https://steamcommunity.com/id/ardenatreef/myworkshopfiles/?appid=4000"
            className="link-subtle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arden&apos;s Steam Workshop
          </a>
          .
        </p>
    );
  }

  return (
    <div className="space-y-4">
      {!ready ? (
        <p className="type-caption-muted">Loading Workshop items…</p>
      ) : null}
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      />
    </div>
  );
}
