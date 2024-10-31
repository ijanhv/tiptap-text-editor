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