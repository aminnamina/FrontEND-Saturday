export interface Story {
    slug: string;
    headline: string;
    text: string;
    editorCode: string;
    released: string;
    topics: string;
    duration: number;
}

export interface Editor {
    handle: string;
    name: string;
    bio: string;
    pic: string;
}
