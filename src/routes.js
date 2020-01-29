import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Mateus Granero',
    email: 'mateusgranero@gmail.com',
    password_hash: '123465987',
  });
  return res.json(user);
});

export default routes;
