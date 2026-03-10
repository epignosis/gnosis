export const sidebarMeta = {
  title: "Components/Sidebar",
  argTypes: {
    onToggle: {
      action: "Toggle action fired",
    },
  },
  args: {
    isCollapsed: false,
    style: { zIndex: 10, overflow: "auto" },
  },
};
