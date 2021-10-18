import { Story } from "@storybook/react";
declare const _default: {
    title: string;
    component: import("./Card").CardProps & {
        Header: import("./Header").CardHeaderProps;
        Thumbnail: import("./Thumbnail").ThumbnailProps;
        Hover: import("./Hover").HoverProps;
        Body: import("./Body").BodyProps;
        Overlay: import("./Overlay").OverlayProps;
        Drawer: import("./Drawer").DrawerProps;
    };
    decorators: ((Story: Story<import("@storybook/react").Args>) => JSX.Element)[];
};
export default _default;
export declare const KitchenSink: Story<{
    isOverlayShow: boolean;
    isDrawerOpen: boolean;
}>;
