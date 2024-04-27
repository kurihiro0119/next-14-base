import React from "react";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import { Icon } from "../Icon";
import { TextField } from "../TextField";

type CommentBoxProps = {
  inputProps: ComponentProps<typeof TextField>;
  buttonProps?: ComponentPropsWithoutRef<"button">;
};

export const CommentBox = ({ inputProps, buttonProps }: CommentBoxProps) =>
{
  return (
    <div className="flex p-2 border border-gray-200 rounded">
      <TextField {...inputProps} className="flex-grow border-r-0 rounded-tr-none rounded-br-none" />
      <button
        aria-label="コメントを投稿する"
        type="submit"
        className="p-4 border border-gray-300 rounded hover:opacity-50 bg-transparent cursor-pointer rounded-tl-none rounded-bl-none"
        {...buttonProps}
      >
        <Icon type="paper-plane" color="white" size="medium" />
      </button>
    </div>
  );
}