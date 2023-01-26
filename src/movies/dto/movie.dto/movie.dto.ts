import {ImdbDto} from "./imdb.dto";

export class MovieDto {

    _id: string
    title: string;
    year: number;
    director: string;
    plot: string;
    poster: string;
    genres: any[];
    imdb: ImdbDto;
}
