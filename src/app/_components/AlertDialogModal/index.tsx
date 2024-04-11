import React, { ComponentProps, ReactNode } from "react";


type AlertDialogModalProps = {
  title?: string;
  overlayProps?: ComponentProps<"div">;
  messageNode: ReactNode;
  actionNode: ReactNode;
}

export const AlertDialogModal = ({
  title = "確認",
  overlayProps,
  messageNode,
  actionNode,
}: AlertDialogModalProps) =>
{
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full z-20">
      <div
        {...overlayProps}
        className={`fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-15 backdrop-blur-sm ${overlayProps?.className ?? ""}`}
      />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        className="relative flex flex-col items-center justify-center min-w-[380px] min-h-[190px] rounded-lg bg-white z-30 shadow-lg"
      >
        <p className="p-4 text-center text-base whitespace-pre-wrap">{messageNode}</p>
        <div className="flex justify-center gap-2">{actionNode}</div>
      </div>
    </div>
  )
}