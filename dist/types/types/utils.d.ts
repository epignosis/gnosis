/// <reference types="react" />
export declare type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithRef<C>>;
declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
export declare type ExtendableProps<ExtendedProps = unknown, OverrideProps = unknown> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
export declare type InheritableElementProps<C extends React.ElementType, Props = unknown> = ExtendableProps<PropsOf<C>, Props>;
export declare type PolymorphicComponentProps<C extends React.ElementType, Props = unknown> = InheritableElementProps<C, Props & AsProp<C>>;
export declare type ValueOf<T> = T[keyof T];
export {};
