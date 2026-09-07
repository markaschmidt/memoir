import cloudflareIcon from "@/icons/tech-icons/Cloudflare.svg";
import dockerIcon from "@/icons/tech-icons/Docker.svg";
import expoIcon from "@/icons/tech-icons/Expo.svg";
import fastapiIcon from "@/icons/tech-icons/FastAPI.svg";
import firebaseIcon from "@/icons/tech-icons/Firebase.svg";
import geminiIcon from "@/icons/tech-icons/Gemini.svg";
import googleCloudIcon from "@/icons/tech-icons/Google Cloud.svg";
import html5Icon from "@/icons/tech-icons/HTML5.svg";
import jaclangIcon from "@/icons/tech-icons/Jaclang.svg";
import javascriptIcon from "@/icons/tech-icons/JavaScript.svg";
import luaIcon from "@/icons/tech-icons/Lua.svg";
import nestjsIcon from "@/icons/tech-icons/Nest.js.svg";
import nextjsIcon from "@/icons/tech-icons/Next.js.svg";
import nodejsIcon from "@/icons/tech-icons/Node.js.svg";
import pythonIcon from "@/icons/tech-icons/Python.svg";
import raspberryPiIcon from "@/icons/tech-icons/Raspberry Pi.svg";
import reactIcon from "@/icons/tech-icons/React.svg";
import reefMediaIcon from "@/icons/tech-icons/Reef Media.svg";
import redisIcon from "@/icons/tech-icons/Redis.svg";
import rustIcon from "@/icons/tech-icons/Rust.svg";
import tauriIcon from "@/icons/tech-icons/Tauri.svg";
import typescriptIcon from "@/icons/tech-icons/TypeScript.svg";
import vuejsIcon from "@/icons/tech-icons/Vue.js.svg";

export const TECH_ICON_ASSETS = {
  nextjs: nextjsIcon,
  react: reactIcon,
  reefmedia: reefMediaIcon,
  typescript: typescriptIcon,
  javascript: javascriptIcon,
  python: pythonIcon,
  rust: rustIcon,
  fastapi: fastapiIcon,
  tauri: tauriIcon,
  nodejs: nodejsIcon,
  docker: dockerIcon,
  expo: expoIcon,
  redis: redisIcon,
  cloudflare: cloudflareIcon,
  googlecloud: googleCloudIcon,
  firebase: firebaseIcon,
  gemini: geminiIcon,
  html5: html5Icon,
  jaclang: jaclangIcon,
  vuejs: vuejsIcon,
  nestjs: nestjsIcon,
  lua: luaIcon,
  raspberrypi: raspberryPiIcon,
} as const;

export type TechIconKey = keyof typeof TECH_ICON_ASSETS;
