import React from "react";
import type { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) =>
{
  return <div className="flex flex-grow">
    {children}
  </div>
}