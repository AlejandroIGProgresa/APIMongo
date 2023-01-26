import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from '../../interfaces/movie/movie.interface';
import { MovieDto } from '../../dto/movie.dto/movie.dto';
import {json} from "express";
@Injectable()
export class MovieService {
    constructor(

        @InjectModel('movie') private movieModel:

            Model<Movie>,
    ) {}
    async create(movieDTO: MovieDto):
        Promise<Movie> {

        const movie = new this.movieModel(movieDTO);
        return await movie.save();
    }
    async getMovies(): Promise<Movie[]> {
        return this.movieModel.find();
    }
    async getMovie(idMovie: string): Promise<Movie> {

        return this.movieModel.findOne({_id: idMovie});
    }

    async updateMovie(idMovie: string, movieDto: MovieDto) : Promise<Movie[]> {
        return  this.movieModel.findByIdAndUpdate(idMovie, {$set: movieDto}, {new: true})
    }

    async deleteMovie(idMovie: string): Promise<Movie[]> {
        return this.movieModel.findByIdAndDelete(idMovie)
    }
}
