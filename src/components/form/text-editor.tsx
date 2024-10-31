"use client";
import React, { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { useEditor, EditorContent, ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Youtube from "@tiptap/extension-youtube";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Blockquote from "@tiptap/extension-blockquote";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import MenuBar from "./menu-bar";
import { editorSchema } from "@/schema/editor";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { Node, mergeAttributes } from "@tiptap/core"

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import go from "highlight.js/lib/languages/go";
import { all, createLowlight } from "lowlight";
import { CodeBlockComponent } from "./code-block";
import { ImageExtension } from "./extensions/image";

interface ITextEditorProp {
  form: UseFormReturn<z.infer<typeof editorSchema>>;
}

const lowlight = createLowlight(all);

// you can also register individual languages
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);
lowlight.register("go", go);

const ToggleList = Node.create({
  name: "toggleList",
  group: "block",
  content: "paragraph+",
  defining: true,
  parseHTML() {
    return [{ tag: "details" }]
  },
  renderHTML({ HTMLAttributes }) {
    return ["details", mergeAttributes(HTMLAttributes), ["summary", 0], ["div", { class: "toggle-content" }, 1]]
  },
  addCommands() {
    return {
      toggleToggleList:
        () =>
        ({ commands }) => {
          return commands.toggleWrap("toggleList")
        },
    }
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-T": () => this.editor.commands.toggleToggleList(),
    }
  },
})

const TextEditor: React.FC<ITextEditorProp> = ({ form }) => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,

      CodeBlockLowlight.extend({
        addNodeView() {
          // @ts-ignore
          // eslint-disable-next-line new-cap
          return ReactNodeViewRenderer(CodeBlockComponent);
        },
      }).configure({ lowlight }),

      Underline,
      TextStyle,
      Color,
      ImageExtension,
      Blockquote.configure({
        HTMLAttributes: {
          class: "dark:text-white text-black",
        },
      }),
      Bold.configure({
        HTMLAttributes: {
          class: "dark:text-white text-black",
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "dark:text-white text-black",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "left",
        alignments: ["left", "center", "right", "justify"],
      }),
      ToggleList,

      Youtube.configure({
        controls: false,
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class:
            "flex items-center flex-row w-full h-full not-prose pl-2 gap-3 my-3",
        },
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class:
            "font-bold hover:underline cursor-pointer no-underline text-blue-400",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: `prose   mt-6   min-h-screen p-2 focus:outline-none dark:text-white max-w-5xl `,
      },
    },
    content: form.watch("content"),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      form.setValue("content", html);
    },
  });
  useEffect(() => {
    if (!editor) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        setShowMenuBar(true);
      }
    };

    const handleClickOutside = () => {
      setShowMenuBar(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [editor]);

  // if (!editor) {
  //   return null;
  // }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex flex-col items-center  text-left border w-full max-w-full  rounded-md ">
        <EditorContent editor={editor} />
      </ContextMenuTrigger>
      <MenuBar editor={editor} />
    </ContextMenu>
  );
};

export default TextEditor;
