import { BatteryType } from "@/components/DeviceAndBrowser";

// function thats gets userAgent and returns the browser
export const getBrowser = (userAgent: string | undefined) => {
  if (!userAgent) return "Unknown";
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Edg")) return "Edge";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Opera")) return "Opera";
  return "Unknown";
};

export const getBatteryStatus = (battery: BatteryType | null) => {
  if (!battery) return "Unknown";
  return `${Math.floor(battery.level * 100)}%`;
};
