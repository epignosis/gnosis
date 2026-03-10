export const breadcrumbsMeta = {
  title: "Components/Breadcrumbs",
  argTypes: {
    items: {
      control: "object",
      description: "List of all breadcrumb items",
    },
    highlightActivePage: {
      control: "boolean",
      description: "Last item gets inactive and highlighted (black color)",
    },
    navAriaLabel: {
      control: "text",
      description: "Aria label for the nav element",
    },
    linkAriaLabel: { control: "none", description: "Aria label for the link element" },
  },
};

export const defaultArgs = {
  items: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Introduction to TypeScript", href: "/courses/ts" },
  ],
};
