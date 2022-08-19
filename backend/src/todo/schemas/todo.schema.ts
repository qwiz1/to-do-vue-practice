import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document<string>;

@Schema()
export class Todo {
    @Prop()
    description: string;

    @Prop({ default: false })
    done: boolean;

    @Prop({ default: new Date() })
    created_at: Date

    @Prop({ default: new Date() })
    updated_at: Date
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
