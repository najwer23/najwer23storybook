import * as react_jsx_runtime from 'react/jsx-runtime';

interface ItemLink {
    itemLink: string;
    itemLinkText: string;
    itemLinkType: "hash" | "link" | "linkOut";
}
interface ItemGroup {
    menuTitle: string;
    items: ItemLink[];
}
interface MenuAsideType {
    menuItems: ItemGroup[][];
}

declare const MenuAside: ({ menuItems }: MenuAsideType) => react_jsx_runtime.JSX.Element;

export { MenuAside };
