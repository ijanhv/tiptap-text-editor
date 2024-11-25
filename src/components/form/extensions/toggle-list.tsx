/* eslint-disable no-unused-vars */
// @ts-ignore
const ToggleList = Node.create({
  name: "toggleList",
  group: "block",
  content: "paragraph+",
  defining: true,
  parseHTML() {
    return [{ tag: "details" }];
  },
  // @ts-ignore
  renderHTML({ HTMLAttributes }) {
    return [
      "details",
      // @ts-ignore
      mergeAttributes(HTMLAttributes),
      ["summary", 0],
      ["div", { class: "toggle-content" }, 1],
    ];
  },
  addCommands() {
    return {
      toggleToggleList:
        () =>
        // @ts-ignore
        ({ commands }) => {
          return commands.toggleWrap("toggleList");
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-T": () => this.editor.commands.toggleToggleList(),
    };
  },
});
