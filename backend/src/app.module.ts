import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { config } from 'dotenv';
import { join } from 'path';

config();
const uri = process.env.MONGODB_URI;

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../frontend/dist'),
    }),
    MongooseModule.forRoot(
      uri as string,
    ),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
