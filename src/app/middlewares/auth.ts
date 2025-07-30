// import { NextFunction, Request, Response } from 'express';
import config from '../config';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../modules/User/user.model';

const auth = () => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    // console.log('incoming token', token);

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
    const { userId, email } = decoded;
    console.log(userId);
    // checking if the user is exist
    const user = await User.isUserExistsByEmail(email);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'user not found !');
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
