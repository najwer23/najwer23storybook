import * as react_jsx_runtime from 'react/jsx-runtime';

interface Props {
    menuItems: {
        itemLink: string;
        itemLinkText: string;
        itemLinkType: "hash" | "link" | "linkOut";
    }[];
}
declare const MenuAside: ({ menuItems }: Props) => react_jsx_runtime.JSX.Element;

export { MenuAside };
