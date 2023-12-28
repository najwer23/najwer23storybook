import * as react_jsx_runtime from 'react/jsx-runtime';

type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => react_jsx_runtime.JSX.Element;

export { Header };
