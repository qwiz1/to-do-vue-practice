import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document<string>;

@Schema({
  timestamps: true,
})
export class Todo {
  @Prop()
  description: string;

  @Prop({ default: false })
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
