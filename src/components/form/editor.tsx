"use client";
import { editorSchema } from "@/schema/editor";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextEditor from "./text-editor";
import { blogEditorTemplate } from "@/constants/template";

const Editor = () => {
  const form = useForm<z.infer<typeof editorSchema>>({
    resolver: zodResolver(editorSchema),
    defaultValues: {
      content: blogEditorTemplate,
    },
  });



  const onSubmit = (data: z.infer<typeof editorSchema>) => {};
  return (
    <div className="space-y-2 w-full">
      {/* <FormLabel>Blog Editor</FormLabel> */}
      <TextEditor form={form} />
    </div>
  );
};

export default Editor;
