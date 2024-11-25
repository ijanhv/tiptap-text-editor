"use client";
import React from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";
import { Editor } from "@tiptap/react";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  ImageIcon,
  ImageUp,
  YoutubeIcon,
} from "lucide-react";
import { uploadMedia } from "@/hooks/use-upload-media-query";

interface IMenuBarProp {
  editor: Editor | null;
}
const MenuBar: React.FC<IMenuBarProp> = ({ editor }) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event.target.value = "";
    const fd = new FormData();
    fd.append("file", fileObj);
    fd.append("folder", "blog");
    const res = await uploadMedia(fd);

    if (res.url) {
      editor
        ?.chain()
        .focus()
        .setImage({
          src: `${process.env.SUPABASE_URL}/storage/v1/object/public/${res.url}`,
        })
        .run();
    }
  };

  const addImage = () => {
    const url = prompt("Enter Image URL");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  if (!editor) {
    return null;
  }

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");
    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
      });
    }
  };

  return (
    <>
      <ContextMenuContent className={`w-64 `}>
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <span className="font-bold">Bold</span>
          <ContextMenuShortcut>⌘ ⇧ B</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <span className="italic">Italic</span>

          <ContextMenuShortcut>⌘ ⇧ I</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <span className="underline">Underline</span>

          <ContextMenuShortcut>⌘ U</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <span className="line-through">Strike</span>

          <ContextMenuShortcut>⌘ Shift X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <span>Code Block</span>

          <ContextMenuShortcut>⌘ Alt C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Blockquote
          <ContextMenuShortcut>⌘ Shift B</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          BulletList
          <ContextMenuShortcut>⌘ Shift 8</ContextMenuShortcut>
        </ContextMenuItem>

        {/* ........................ */}
        <ContextMenuItem inset onClick={addImage}>
          Add Image URL
          <ContextMenuShortcut>
            <ImageIcon className="w-4 h-4 mr-2" />
          </ContextMenuShortcut>
        </ContextMenuItem>

        <div
          className="flex px-2 py-1 hover:bg-[#f5f5f5] rounded-sm"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <div>
            <input
              style={{ display: "none" }}
              ref={inputRef}
              type="file"
              accept=".png,.jpeg,.webp,.svg"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex justify-between w-full ">
            <p className="text-[14.5px] pl-6">Media upload</p>
            <ContextMenuShortcut>
              <ImageUp className="w-4 h-4 mr-2" />
            </ContextMenuShortcut>
          </div>
        </div>

        <ContextMenuItem inset onClick={addYoutubeVideo}>
          Add Youtube URL
          <ContextMenuShortcut>
            <YoutubeIcon className="w-4 h-4 mr-2" />
          </ContextMenuShortcut>
        </ContextMenuItem>
        {/* .................heading......................... */}
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Headings</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <Heading1Icon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Alt 1</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <Heading2Icon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Alt 2</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3Icon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Alt 3</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
            >
              <Heading4Icon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Alt 4</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
            >
              <Heading5Icon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Alt 5</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        {/* ................Text Align............................... */}
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>TextAlign</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
            >
              <AlignJustifyIcon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Shift J</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
            >
              <AlignCenterIcon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Shift C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
            >
              <AlignLeftIcon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Shift L</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
            >
              <AlignRightIcon className="w-4 h-4" />
              <ContextMenuShortcut>⌘ Shift R</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        {/* ................Tast Item............................... */}
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Task Item</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive("taskList") ? "is-active" : ""}
            >
              Toggle
              <ContextMenuShortcut>⌘ Shift J</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        {/* <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().toggleToggleList().run()}
          className={editor.isActive("toggleList") ? "is-active" : ""}
        >
        <ToggleLeft className="w-5 h-5" />
          <ContextMenuShortcut>⌘ Shift Z</ContextMenuShortcut>
        </ContextMenuItem> */}

        {/* ................Text Color............................... */}
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Text Color</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem
              onClick={() => editor.chain().focus().setColor("#CD1818").run()}
            >
              <span className="text-[#CD1818] font-bold ">A</span>
              <span className="ml-4">Red</span>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => editor.chain().focus().setColor("#59CE8F").run()}
            >
              <span className="text-[#59CE8F] font-bold ">A</span>
              <span className="ml-4">Green</span>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => editor.chain().focus().setColor("#958DF1").run()}
            >
              <span className="text-[#958DF1] font-bold ">A</span>
              <span className="ml-4">Purple</span>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => editor.chain().focus().unsetColor().run()}
            >
              <span className="font-bold ">A</span>
              <span className="ml-4">Default</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        {/* .............................................................. */}
        <ContextMenuSeparator />
        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().undo().run()}
        >
          <span>Undo</span>
          <ContextMenuShortcut>⌘ Z</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem
          inset
          onClick={() => editor.chain().focus().redo().run()}
        >
          <span>Redo</span>
          <ContextMenuShortcut>⌘ Shift Z</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </>
  );
};

export default MenuBar;
