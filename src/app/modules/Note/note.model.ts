import { Schema, model } from 'mongoose';
import { TNote } from './note.interface';

const noteSchema = new Schema<TNote>(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    content: {
      type: String,
      required: [true, 'Content is required.'],
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User is required.'],
      // unique: true,
      ref: 'User',
    },
  },
  { timestamps: true },
);

export const Note = model<TNote>('Note', noteSchema);
