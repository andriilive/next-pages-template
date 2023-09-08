"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeSwitch = void 0;
var react_1 = require("react");
var visually_hidden_1 = require("@react-aria/visually-hidden");
var theme_1 = require("@nextui-org/theme");
var next_themes_1 = require("next-themes");
var clsx_1 = require("clsx");
var icons_1 = require("@/components/icons");
var ThemeSwitch = function (_a) {
    var className = _a.className, classNames = _a.classNames;
    var _b = (0, react_1.useState)(false), isMounted = _b[0], setIsMounted = _b[1];
    var _c = (0, next_themes_1.useTheme)(), theme = _c.theme, setTheme = _c.setTheme;
    var onChange = function () {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    var _d = (0, theme_1.useSwitch)({
        isSelected: theme === "light",
        onChange: onChange,
    }), Component = _d.Component, slots = _d.slots, isSelected = _d.isSelected, getBaseProps = _d.getBaseProps, getInputProps = _d.getInputProps, getWrapperProps = _d.getWrapperProps;
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, [isMounted]);
    // Prevent Hydration Mismatch
    if (!isMounted)
        return <div className="w-6 h-6"/>;
    return (<Component {...getBaseProps({
        className: (0, clsx_1.default)("px-px transition-opacity hover:opacity-80 cursor-pointer", className, classNames === null || classNames === void 0 ? void 0 : classNames.base),
    })}>
			<visually_hidden_1.VisuallyHidden>
				<input {...getInputProps()}/>
			</visually_hidden_1.VisuallyHidden>
			<div {...getWrapperProps()} className={slots.wrapper({
            class: (0, clsx_1.default)([
                "w-auto h-auto",
                "bg-transparent",
                "rounded-lg",
                "flex items-center justify-center",
                "group-data-[selected=true]:bg-transparent",
                "!text-default-500",
                "pt-px",
                "px-0",
                "mx-0",
            ], classNames === null || classNames === void 0 ? void 0 : classNames.wrapper),
        })}>
				{isSelected ? (<icons_1.MoonFilledIcon size={22}/>) : (<icons_1.SunFilledIcon size={22}/>)}
			</div>
		</Component>);
};
exports.ThemeSwitch = ThemeSwitch;
