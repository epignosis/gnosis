import { Theme, SerializedStyles } from "@emotion/react";
export declare const container: SerializedStyles;
export declare const tabsHeader: ({ tabs }: Theme, { stickyHeader }: {
    stickyHeader?: boolean | undefined;
}) => SerializedStyles;
export declare const tabNavItem: ({ tabs }: Theme, { isActive }: {
    isActive: boolean;
}) => SerializedStyles;
export declare const tabsContent: (isActive: boolean) => SerializedStyles;
