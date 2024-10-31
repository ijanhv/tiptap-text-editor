import { type ClassValue, clsx } from "clsx";
import type { Editor } from "@tiptap/core";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const duplicateContent = (editor: Editor) => {
  const { view } = editor;
  const { state } = view;
  const { selection } = state;

  editor
    .chain()
    .insertContentAt(
      selection.to,
      selection.content().content.firstChild?.toJSON(),
      {
        updateSelection: true,
      }
    )
    .focus(selection.to)
    .run();
};
