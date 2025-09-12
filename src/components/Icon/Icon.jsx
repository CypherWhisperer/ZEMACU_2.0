import { icons } from "../../assets/assets";

export default function Icon({name, size=24, color="currentColor", ...rest}) {
    // Picking the right icon/ logo by name
    // this will return the svg, but since we are using vite-plugin-svgr,
    // as JSX component and not a string(a path to the file)
    const SvgIcon = icons[name];

    // If not found, Fallback
    if (!SvgIcon) {
        console.warn(`icon ${name} not found`);
        return null;
    }

    return <SvgIcon width={size} height={size} fill={color} {...rest} />;
}

// Usage example:
// Intead of having icons and logos as images (Less flexible), we can now have
// <Icon name="home" size={40} color="purple" }