/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoginUser, IUser } from './user.interface';
import httpStatus from 'http-status';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import { createToken } from './user.utils';
import config from '../../config';

const createRegisterUserIntoDB = async (payload: IUser) => {
  try {
    // create a user
    const newUser = await User.create(payload);

    //create a user
    if (!newUser) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to create register user',
      );
    }
    return newUser;
  } catch (err: any) {
    throw new Error(err);
  }
};

const loginUser = async (payload: ILoginUser) => {
  //check user exist or not
  const user = await User.isUserExistsByEmail(payload.email);
  // console.log('user:',user);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'login user not found !');
  }

  //check password correct or not
  const passwordMatched = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  );
  // console.log('passwordMatched:',passwordMatched);
  if (!passwordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not matched');
  }
  // create token
  const jwtPayload = { userId: user._id, email: user.email };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  return {
    accessToken,
  };
};
export const UserServices = {
  createRegisterUserIntoDB,
  loginUser,
};
