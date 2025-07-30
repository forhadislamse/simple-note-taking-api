import { TNote } from './note.interface';
import { Note } from './note.model';

const createNoteIntoDb = async (noteData: TNote) => {
  const result = await Note.create(noteData);
  return result;
};

const getAllNotesFromDb = async (user: string) => {
  const result = await Note.find({ user: user }).populate('user');
  return result;
};

const getNoteBySpecificIdFromDb = async (noteId: string, user: string) => {
  const result = await Note.findOne({ _id: noteId, user: user });
  return result;
};

const updateNoteIntoDb = async (
  noteId: string,
  user: string,
  payload: Partial<TNote>,
) => {
  const result = await Note.findOneAndUpdate(
    {
      _id: noteId,
      user: user,
    },
    payload,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

const deleteNoteFromDb = async (noteId: string, user: string) => {
  const result = await Note.findOneAndDelete({ _id: noteId, user: user });
  return result;
};

export const NoteServices = {
  createNoteIntoDb,
  getAllNotesFromDb,
  getNoteBySpecificIdFromDb,
  updateNoteIntoDb,
  deleteNoteFromDb,
};
