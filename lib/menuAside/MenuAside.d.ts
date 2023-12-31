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
export declare const MenuAside: ({ menuItems }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
