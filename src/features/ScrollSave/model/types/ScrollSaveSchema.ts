// <Page address, scroll position in pixels>
export type ScrollSchema = Record<string, number>

export interface ScrollSaveSchema {
    scroll: ScrollSchema;
}
