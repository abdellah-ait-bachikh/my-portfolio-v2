"use client"
import React, { createContext, useState } from "react";

export interface ActiveLinkContextType {
  activeLink: undefined | "#about" | "#skills" | "#projects" | "#contact";
  setActiveLink: (value: ActiveLinkContextType["activeLink"]) => void;
}

export const ActiveLinkContext = createContext<ActiveLinkContextType>({
  activeLink: undefined,
  setActiveLink: () => {},
});

export const ActiveLinkContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeLink, setActiveLink] =
    useState<ActiveLinkContextType["activeLink"]>(undefined);

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
