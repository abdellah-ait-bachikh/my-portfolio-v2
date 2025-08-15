"use client";
import { ActiveLinkContext } from "@/context/ActiveLink";
import React, { useContext, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const LisenToScroll = () => {
  const { setActiveLink } = useContext(ActiveLinkContext);
  const lastSection = useRef<string | undefined>(undefined);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    const detectSection = () => {
      let currentSection: string | undefined;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = `#${id}`;
          }
        }
      });

      if (currentSection && currentSection !== lastSection.current) {
        lastSection.current = currentSection;
        setActiveLink(currentSection as any);

        // ✅ Update URL hash only when it changes
        if (window.location.hash !== currentSection) {
          window.history.replaceState(null, "", currentSection);
        }
      }
    };

    const handleScroll = () => {
      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      // Run detectSection 300ms after scrolling stops
      scrollTimeout.current = setTimeout(detectSection, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run once on mount
    detectSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [setActiveLink]);

  return (
    <div className="fixed bottom-4 right-4 h-fit">
      <Button
        size={"icon"}
        variant={"secondary"}
        asChild
        className="cursor-pointer rounded-3xl"
      >
        <Link
          href={"/#home"}
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#home")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            setActiveLink(undefined);
            window.history.replaceState(null, "", "#home");
          }}
        >
          <Home />
        </Link>
      </Button>
    </div>
  );
};

export default LisenToScroll;
