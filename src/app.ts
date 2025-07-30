import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', router);

const tester = (req: Request, res: Response) => {
  // const a = 100;
  res.json({
    data: 'Hello Backend Developer', // get data
  });
};
app.get('/', tester);

app.use(globalErrorHandler);
app.use(notFound);
export default app;
