import { ActiveLinkContextType } from "@/context/ActiveLink"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { links } from "./const"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTranslateActiveBefore = (
  activeLink: ActiveLinkContextType["activeLink"]
) => {
  const index = links.findIndex((e) => e.href === activeLink);
  return index !== -1 ? 75 * index : -90;
};