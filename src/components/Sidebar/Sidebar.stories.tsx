import React, { ReactNode } from "react";
import { Story } from "@storybook/react";
import { Avatar } from "../../";
import SidebarComponent, { SidebarProps } from "./Sidebar";
import {
  CalendarSVG,
  CatalogSVG,
  ChatCloudsSVG,
  CommunicationSVG,
  HelpSVG,
  HomeSVG,
  MyCoursesSVG,
  OpenedMessageSVG,
} from "@icons/core";

export default {
  component: SidebarComponent,
  title: "Components/Sidebar",
  decorators: [
    (story: () => ReactNode): JSX.Element => <div style={{ display: "flex" }}>{story()}</div>,
  ],
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

export const Sidebar: Story<SidebarProps> = (args) => (
  <SidebarComponent {...args}>
    <div
      style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<HomeSVG height={32} />}
              label="Home"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<MyCoursesSVG height={32} />}
              label="My courses"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<CatalogSVG height={32} />}
              label="Catalog"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<CalendarSVG height={32} />}
              label="Calendar"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
      </ul>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<OpenedMessageSVG height={32} />}
              label="Messages"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<ChatCloudsSVG height={32} />}
              label="Discussions"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<CommunicationSVG height={32} />}
              label="Notifications"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={<HelpSVG height={32} />}
              label="Help"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" style={{ display: "block" }}>
            <SidebarComponent.Item
              icon={
                <Avatar size="xs" bgColor="#FF8000">
                  DS
                </Avatar>
              }
              label="My profile"
              isExpanded={!args.isCollapsed}
            />
          </a>
        </li>
      </ul>
    </div>
  </SidebarComponent>
);
