declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
