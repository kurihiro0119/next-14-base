import React, { ComponentProps } from "react";
import { Typography } from "../Typography";

type Props = ComponentProps<typeof Typography>;

export function AlertText({ children, className }: Props)
{
  return (
    <Typography className={`text-orange-800 ${className}`}>{children}</Typography>
  );
}
