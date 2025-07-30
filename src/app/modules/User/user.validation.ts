import { z } from 'zod';

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required.' }),
    email: z.string().email(),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(15, { message: 'Password can not be more than 15 characters' }),
  }),
});

export const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required.' })
      .email({ message: 'Invalid Email format' }),
    password: z.string({
      required_error:
        'Password is required and must be at least 6 characters,not more than 15 characters',
    }),
  }),
});
