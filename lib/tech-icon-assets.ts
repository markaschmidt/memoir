import cloudflareIcon from "@/icons/tech-icons/Cloudflare.svg";
import dockerIcon from "@/icons/tech-icons/Docker.svg";
import fastapiIcon from "@/icons/tech-icons/FastAPI.svg";
import firebaseIcon from "@/icons/tech-icons/Firebase.svg";
import googleCloudIcon from "@/icons/tech-icons/Google Cloud.svg";
import javascriptIcon from "@/icons/tech-icons/JavaScript.svg";
import luaIcon from "@/icons/tech-icons/Lua.svg";
import nestjsIcon from "@/icons/tech-icons/Nest.js.svg";
import nextjsIcon from "@/icons/tech-icons/Next.js.svg";
import nodejsIcon from "@/icons/tech-icons/Node.js.svg";
import pythonIcon from "@/icons/tech-icons/Python.svg";
import raspberryPiIcon from "@/icons/tech-icons/Raspberry Pi.svg";
import reactIcon from "@/icons/tech-icons/React.svg";
import redisIcon from "@/icons/tech-icons/Redis.svg";
import rustIcon from "@/icons/tech-icons/Rust.svg";
import tauriIcon from "@/icons/tech-icons/Tauri.svg";
import typescriptIcon from "@/icons/tech-icons/TypeScript.svg";
import vuejsIcon from "@/icons/tech-icons/Vue.js.svg";

export const TECH_ICON_ASSETS = {
  nextjs: nextjsIcon,
  react: reactIcon,
  typescript: typescriptIcon,
  javascript: javascriptIcon,
  python: pythonIcon,
  rust: rustIcon,
  fastapi: fastapiIcon,
  tauri: tauriIcon,
  nodejs: nodejsIcon,
  docker: dockerIcon,
  redis: redisIcon,
  cloudflare: cloudflareIcon,
  googlecloud: googleCloudIcon,
  firebase: firebaseIcon,
  vuejs: vuejsIcon,
  nestjs: nestjsIcon,
  lua: luaIcon,
  raspberrypi: raspberryPiIcon,
} as const;

export type TechIconKey = keyof typeof TECH_ICON_ASSETS;
