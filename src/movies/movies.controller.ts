import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { MovieService } from './services/movie/movie.service';
import { MovieDto } from './dto/movie.dto/movie.dto';
@Controller('api/movies')
export class MoviesController {
    constructor(private readonly movieService: MovieService) {}
    @Post('')
    async register(@Body() movieDTO: MovieDto) {
        const movie = await this.movieService.create(
            movieDTO,
        );
        return movie;
    }
    @Get('movies')
    async getMovies() {
        const movies = await this.movieService.getMovies();
        return movies;
    }
    @Get('movies/:idMovie')
    async getMovie(@Param('idMovie') idMovie: string) {
        return await this.movieService.getMovie(idMovie);
    }

    @Put('/:id')
    async updateMovie(
        @Body() movieDto: MovieDto,
        @Param('id') id: string
    ){
        return await this.movieService.updateMovie(id, movieDto)
    }

    @Delete('movies/movie/:id')
    async deleteMovie(@Param('id') id: string){
        return await this.movieService.deleteMovie(id)
    }

}