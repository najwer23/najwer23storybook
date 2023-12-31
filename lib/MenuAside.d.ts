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
interface Props {
    menuItems: ItemGroup[][];
}
declare const MenuAside: ({ menuItems }: Props) => react_jsx_runtime.JSX.Element;

export { MenuAside };
