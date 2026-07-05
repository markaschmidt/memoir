import { TECH_ICON_ASSETS, type TechIconKey } from "@/lib/tech-icon-assets";
import { cn } from "@/lib/utils";

function normalizeTechName(name: string): TechIconKey | null {
  const normalized = name.toLowerCase().replace(/[^a-z0-9+.#]+/g, "");

  if (normalized.includes("next.js") || normalized.includes("nextjs")) {
    return "nextjs";
  }
  if (normalized.includes("typescript")) return "typescript";
  if (normalized.includes("javascript")) return "javascript";
  if (normalized.includes("fastapi")) return "fastapi";
  if (normalized.includes("python")) return "python";
  if (normalized.includes("react")) return "react";
  if (normalized.includes("rust")) return "rust";
  if (normalized.includes("nodejs") || normalized.includes("node.js")) {
    return "nodejs";
  }
  if (normalized.includes("tauri")) return "tauri";
  if (normalized.includes("docker")) return "docker";
  if (normalized.includes("redis")) return "redis";
  if (normalized.includes("cloudflare")) return "cloudflare";
  if (normalized.includes("googlecloud") || normalized.includes("gcp")) {
    return "googlecloud";
  }
  if (normalized.includes("firebase")) return "firebase";
  if (normalized.includes("vue.js") || normalized.includes("vuejs")) {
    return "vuejs";
  }
  if (normalized.includes("nest.js") || normalized.includes("nestjs")) {
    return "nestjs";
  }
  if (normalized.includes("lua")) return "lua";
  if (normalized.includes("raspberrypi")) return "raspberrypi";

  return normalized in TECH_ICON_ASSETS ? (normalized as TechIconKey) : null;
}

function getTechIconSrc(name: string) {
  const key = normalizeTechName(name);
  return key ? TECH_ICON_ASSETS[key] : null;
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const src = getTechIconSrc(name);

  if (!src) return null;

  return (
    <img
      src={src.src}
      alt=""
      aria-hidden="true"
      width={src.width}
      height={src.height}
      className={cn("size-4 shrink-0 object-contain", className)}
    />
  );
}

export function hasTechIcon(name: string) {
  return Boolean(getTechIconSrc(name));
}
