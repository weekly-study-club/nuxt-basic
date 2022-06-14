import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  username: { type: String, unique: true },
  password: { type: String, unique: true },
});

export const User = mongoose.model('Users', UserSchema);

