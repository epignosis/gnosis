import { Story } from "@storybook/react/types-6-0";
import { TypeScaleConfig } from "@theme/utils/typography";
declare const _default: {
    title: string;
    argTypes: {
        sizeRatio: {
            control: {
                type: string;
                options: number[];
            };
        };
    };
    decorators: ((Story: Story<import("@storybook/react/types-6-0").Args>) => JSX.Element)[];
};
export default _default;
export declare const TypographyDocumentation: Story<TypeScaleConfig & {
    baseSize: number;
}>;
