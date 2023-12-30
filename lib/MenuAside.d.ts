import * as react_jsx_runtime from 'react/jsx-runtime';

interface Props {
    menuItems: {
        itemLink: string;
        itemLinkText: string;
        itemLinkType: "hash" | "link" | "linkOut";
    }[];
    menuTitle: string;
}
declare const MenuAside: ({ menuItems, menuTitle }: Props) => react_jsx_runtime.JSX.Element;

export { MenuAside };
