import httpStatus from 'http-status';

import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { NoteServices } from './note.service';

const createNote = catchAsync(async (req, res) => {
  const user = req.user.userId;

  const { title, content } = req.body;

  const result = await NoteServices.createNoteIntoDb({
    title,
    content,
    user,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created note successfully',
    data: result,
  });
});

const getAllNotes = catchAsync(async (req, res) => {
  const user = req.user.userId;

  const result = await NoteServices.getAllNotesFromDb(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Notes retrieved successfully for logged in user',
    data: result,
  });
});

const getNoteBySpecificId = catchAsync(async (req, res) => {
  const user = req.user.userId;
  const noteId = req.params.id;
  const result = await NoteServices.getNoteBySpecificIdFromDb(noteId, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Specific Note retrieved successfully for logged in user',
    data: result,
  });
});

const updateNote = catchAsync(async (req, res) => {
  const user = req.user.userId;
  const noteId = req.params.id;
  const result = await NoteServices.updateNoteIntoDb(noteId, user, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Note updated successfully for logged in user',
    data: result,
  });
});

const deleteNote = catchAsync(async (req, res) => {
  const user = req.user.userId;
  const noteId = req.params.id;
  const result = await NoteServices.deleteNoteFromDb(noteId, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Note deleted successfully',
    data: result,
  });
});

export const NoteControllers = {
  createNote,
  getAllNotes,
  getNoteBySpecificId,
  updateNote,
  deleteNote,
};
