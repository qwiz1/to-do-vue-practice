import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      '',
    ),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
