import React, { FC } from "react";
export declare type InputErrorProps = ({
    as?: "div";
} & React.HTMLAttributes<HTMLDivElement>) | ({
    as?: "span";
} & React.HTMLAttributes<HTMLSpanElement>);
declare const InputError: FC<InputErrorProps>;
export default InputError;
