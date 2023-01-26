import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {MovieSchema} from "./schema/movie.schema/movie.schema";
import {MovieService} from "../../../nest-js/dist/movies/services/movie/movie.service";
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Movies', schema: MovieSchema}]),
    ],
    providers: [MovieService],
    controllers: [MoviesController],
})
export class MoviesModule {}
