declare const defaultTheme: {
    body: {
        color: string;
        background: string;
        fontSize: string;
        lineHeight: number;
    };
    link: {
        color: string;
        hoverColor: string;
    };
    typeScaleSizes: Readonly<import("../utils/typography").TypeScaleSizes>;
    alert: {
        closeBtnColor: string;
        info: {
            background: string;
            borderColor: string;
            color: string;
        };
        danger: {
            background: string;
            borderColor: string;
            color: string;
        };
        success: {
            background: string;
            borderColor: string;
            color: string;
        };
        warning: {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    badge: {
        background: string;
    };
    breadcrumb: {
        color: string;
        background: string;
    };
    button: {
        disabled: {
            background: string;
            color: string;
            borderColor: string;
        };
        primary: {
            default: {
                background: string;
                borderColor: string;
                color: string;
            };
            hover: {
                background: string;
                borderColor: string;
                color: string;
            };
            active: {
                background: string;
                borderColor: string;
                color: string;
            };
            ghost: {
                color: string;
                background: string;
            };
            outline: {
                color: string;
                borderColor: string;
            };
            link: {
                color: string;
                hoverColor: string;
            };
        };
        secondary: {
            default: {
                background: string;
                borderColor: string;
                color: string;
            };
            hover: {
                background: string;
                borderColor: string;
                color: string;
            };
            active: {
                background: string;
                borderColor: string;
                color: string;
            };
            ghost: {
                color: string;
                background: string;
            };
            outline: {
                color: string;
                borderColor: string;
            };
            link: {
                color: string;
                hoverColor: string;
            };
        };
        danger: {
            default: {
                background: string;
                borderColor: string;
                color: string;
            };
            hover: {
                background: string;
                borderColor: string;
                color: string;
            };
            active: {
                background: string;
                borderColor: string;
                color: string;
            };
            ghost: {
                color: string;
                background: string;
            };
            outline: {
                color: string;
                borderColor: string;
            };
            link: {
                color: string;
                hoverColor: string;
            };
        };
        success: {
            default: {
                background: string;
                borderColor: string;
                color: string;
            };
            hover: {
                background: string;
                borderColor: string;
                color: string;
            };
            active: {
                background: string;
                borderColor: string;
                color: string;
            };
            ghost: {
                color: string;
                background: string;
            };
            outline: {
                color: string;
                borderColor: string;
            };
            link: {
                color: string;
                hoverColor: string;
            };
        };
    };
    card: {
        background: string;
        shadow: string;
        hover: {
            background: string;
        };
        overlay: {
            background: string;
        };
    };
    chip: {};
    drawer: {
        closeBtnColor: {
            base: string;
            hover: string;
        };
    };
    formElements: {
        errors: {
            errorBorderColor: string;
        };
        input: {
            placeholderColor: string;
            borderHoverColor: string;
            inputBorderColor: string;
            background: string;
            iconColor: string;
        };
        radioButtonGroup: {
            normalBackground: string;
            normalFontColor: string;
            selectedBackground: string;
            selectedFontColor: string;
            borderColor: string;
        };
        multiSelect: {
            hover: string;
        };
        checkbox: {
            input: {
                background: string;
                borderColor: string;
                shadowColor: string;
            };
        };
        generalError: {
            borderColor: string;
            background: string;
        };
    };
    loader: {
        color: string;
    };
    modal: {
        iconHover: string;
        color: string;
        border: string;
    };
    progressBar: {
        background: string;
        progressBackground: string;
        percentColor: string;
    };
    result: {
        titleColor: string;
        infoColor: string;
    };
    sidebar: {
        background: string;
        backgroundHover: string;
        backgroundHoverShadow: string;
        color: string;
        colorHover: string;
        hamburgerBackground: string;
        border: string;
    };
    tabs: {
        headerBackground: string;
        headerBorder: string;
        linkNormal: string;
        linkBorder: string;
    };
    tag: {};
    tooltip: {
        background: string;
        color: string;
    };
};
export declare type GnosisTheme = typeof defaultTheme;
export default defaultTheme;
