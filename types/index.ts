export type NavbarLink = {
    text: string;
    component?: string | Component;
    componentFilled?: string | Component;
    path?: string;
    subLink?: string;
    callback?: () => any;
}
