import {Imdb} from "./imdb.interface";

export interface Movie {
    _id: string
    title: string;
    year: number;
    director: string;
    plot: string;
    poster: string;
    genres: any[];
    imdb: Imdb;
}

