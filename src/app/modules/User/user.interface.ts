import { Model } from 'mongoose';

//Fields: name, email, password
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserModel extends Model<IUser> {
  //instance methods--> check if the user exist or not
  isUserExistsByEmail(email: string): Promise<IUser>;

  // check if password matched or not
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
export interface ILoginUser {
  email: string;
  password: string;
}
