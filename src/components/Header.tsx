"use client";
import { ActiveLinkContext } from "@/context/ActiveLink";
import { links } from "@/lib/const";
import { getTranslateActiveBefore } from "@/lib/utils";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
  const { activeLink, setActiveLink } = useContext(ActiveLinkContext);
  const translateBefore = getTranslateActiveBefore(activeLink);
  return (
    <header className="sticky top-0  flex justify-center items-center h-18 z-[9999]">
      <nav
        style={
          {
            "--translate-before": `${translateBefore}px`,
          } as React.CSSProperties
        }
        className={`bg-transparent backdrop-blur-sm border-2 border-white rounded-2xl px-2 py-1.5 flex items-center  relative overflow-hidden before:content-[''] before:absolute before:left-2 before:bg-white before:rounded-xl before:w-[75px] before:h-[32px] before:translate-x-[var(--translate-before)] before:transition-transform before:duration-300 before:ease-in-out`}
      >
        {links.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className=" px-2 py-1 font-semibold w-[75px] flex items-center justify-center z-[9998]"
            onClick={(e) => {
              e.preventDefault();

              document
                .querySelector(item.href)
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              setActiveLink(item.href);
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
