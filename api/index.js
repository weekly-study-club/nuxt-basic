import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { User } from './models/users';

const app = express();
mongoose.connect('mongodb://localhost:27017/express-mongodb-basic');
mongoose.models = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  User.find({}).then((docs) => {
    return res.json(docs);
  }).catch((err) => {
    return res.json(err).status(400);
  });
});

app.post('/users', (req, res) => {
  const { name, username, password } = req.body;
  const user = new User({
    name,
    username,
    password,
  });
  user.save().then(() => {
    return res.json(user);
  });
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  User.findById(userId).then((doc) => {
    return res.json(doc);
  }).catch((err) => {
    return res.json(err).status(400);
  });
});

export default {
  path: '/api',
  handler: app,
};
