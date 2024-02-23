import mongoose, { Schema, model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserSchema extends IUser, Document {}

const userSchema: Schema = new Schema<IUser>(
  {
    email: {
      type: 'String',
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: 'String',
      required: true,
    },
  },
  { timestamps: true }
);

let userModel: mongoose.Model<any>;

try {  
  userModel = model<IUserSchema>('users')
} catch (error) {
  userModel = model<IUserSchema>('users', userSchema)
}

export default userModel;
