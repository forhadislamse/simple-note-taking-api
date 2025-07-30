import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import httpStatus from 'http-status';

const createRegisterUser = catchAsync(async (req, res) => {
  const result = await UserServices.createRegisterUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Register user is created successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);
  const { accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully!',
    data: {
      accessToken,
    },
  });
});
export const UserControllers = {
  createRegisterUser,
  loginUser,
};
