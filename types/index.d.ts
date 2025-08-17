export interface NavLink {
    value: string;
    link: string;
}

export interface ActionResponse<T> {
    submitted: boolean;
    success: boolean
    message: string;
    errors?: {
        [K in keyof T]?: Array<string>
    };
    inputs?: T
}

export interface HomeSchema {
    headerImages: string[];
    galleryImages: string[];
    aboutImages: string[];
    reviews: Array<{
        author_name: string;
        author_url: string;
        text: string;
        rating: number;
    }>;
   lokalita: Array<{
        name: string;
        img: string;
        text: string;
        link: string;
    }>;
    rooms: Array<{
        name: string;
        img: string;
        imgs: string[];
        price: number;
    }>;
}

export type NavLinks = Array<Navlink>