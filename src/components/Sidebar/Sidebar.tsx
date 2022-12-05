import React, { FC } from "react";
import {
  LazyMotion,
  m,
  useReducedMotion,
  Variants,
  domAnimation,
  HTMLMotionProps,
} from "framer-motion";
import { HamburgerSVG } from "../../icons";
import { mainNavContainer } from "./styles";
import NavItem, { NavItemProps } from "./NavItem";
import NavHandle from "./NavHandle";
import { TypographyLevels } from "@theme/utils/typography";

export type SidebarProps = HTMLMotionProps<"nav"> & {
  isCollapsed?: boolean;
  navHandleLabel?: string;
  fontSize?: TypographyLevels;
  onToggle?: () => void;
};

type SidebarCompoundProps = {
  Item: NavItemProps;
};

const navVariants: Variants = {
  expanded: {
    minWidth: "16rem",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  collapsed: {
    minWidth: "4.75rem",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
      delay: 0.1,
    },
  },
  a11yExpanded: {
    minWidth: "16rem",
    transition: {
      duration: 0,
    },
  },
  a11yCollapsed: {
    minWidth: "4.75rem",
    transition: {
      duration: 0,
    },
  },
};

const Sidebar: FC<SidebarProps> & SidebarCompoundProps = ({
  isCollapsed = false,
  navHandleLabel = "Menu",
  fontSize = "md",
  onToggle = () => void 0,
  children,
  ...rest
}) => {
  const isReducedMotion = useReducedMotion();
  let animate: string;

  if (isReducedMotion) {
    animate = isCollapsed ? "a11yCollapsed" : "a11yExpanded";
  } else {
    animate = isCollapsed ? "collapsed" : "expanded";
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        css={mainNavContainer}
        initial={false}
        animate={animate}
        variants={navVariants}
        id="sidebar"
        {...rest}
      >
        <div className="nav-items-wrapper">
          <NavHandle toggleMainNav={onToggle}>
            <NavItem
              label={navHandleLabel}
              isExpanded={!isCollapsed}
              icon={<HamburgerSVG height={32} />}
              fontSize={fontSize}
            />
          </NavHandle>
          {children}
        </div>
      </m.nav>
    </LazyMotion>
  );
};

Sidebar.Item = NavItem;

export default Sidebar;
