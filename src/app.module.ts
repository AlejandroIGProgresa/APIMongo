import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:toor@cluster0.dnv4dhd.mongodb.net/?retryWrites=true&w=majority'), MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
