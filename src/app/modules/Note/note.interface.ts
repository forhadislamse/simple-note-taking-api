import { Types } from 'mongoose';

export type TNote = {
  title: string;
  content: string;
  user: Types.ObjectId;
};
