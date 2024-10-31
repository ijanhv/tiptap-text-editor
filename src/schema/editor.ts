import { z } from "zod";

export const editorSchema = z.object({
  content: z.string().min(1, "Content is required"),
});
