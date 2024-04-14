import React from "react";

type HeadGroupProps = {
  children: React.ReactNode;
};

export const HeadGroup = ({ children }: HeadGroupProps) =>
{
  return (
    <header className="flex items-center pb-4">
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) && index === 0
          ? React.cloneElement(child, { ...child.props, className: `${child.props.className || ''} flex-grow` })
          : child
      )}
    </header>
  );
}