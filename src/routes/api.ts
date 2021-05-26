import express from 'express';
import UsersController from '../controllers/UsersController';

const apiRouter = express.Router();

apiRouter.get('/users', UsersController.index)
apiRouter.post('/users/create', UsersController.create)


export default apiRouter;


