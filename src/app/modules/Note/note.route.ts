import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  noteValidationSchema,
  updateNoteValidationSchema,
} from './note.validation';
import auth from '../../middlewares/auth';
import { NoteControllers } from './note.controller';

const router = express.Router();

router.post(
  '/',
  auth(),
  validateRequest(noteValidationSchema),
  NoteControllers.createNote,
);

router.get('/', auth(), NoteControllers.getAllNotes);

router.get('/:id', auth(), NoteControllers.getNoteBySpecificId);

router.put(
  '/:id',
  auth(),
  validateRequest(updateNoteValidationSchema),
  NoteControllers.updateNote,
);

router.delete('/:id', auth(), NoteControllers.deleteNote);

export const NoteRoutes = router;
