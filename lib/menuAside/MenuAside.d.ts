interface Props {
    menuItems: {
        itemLink: string;
        itemLinkText: string;
        itemLinkType: "hash" | "link" | "linkOut";
    }[];
    menuTitle: string;
}
export declare const MenuAside: ({ menuItems, menuTitle }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
