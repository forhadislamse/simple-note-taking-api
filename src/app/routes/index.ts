import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { NoteRoutes } from '../modules/Note/note.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/notes',
    route: NoteRoutes,
  },
];
//using forEach will give no return
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
