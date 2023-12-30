interface Props {
    menuItems: {
        itemLink: string;
        itemLinkText: string;
        itemLinkType: "hash" | "link" | "linkOut";
    }[];
}
export declare const MenuAside: ({ menuItems }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
