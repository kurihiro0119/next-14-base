import React from "react";

type CardContainerProps = {
  children: React.ReactNode;
};

export const CardContainer = ({ children }: CardContainerProps) =>
{
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}