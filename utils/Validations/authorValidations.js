import joi from 'joi';

export const authorValSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  photo: joi.string().optional(),
  description: joi.string().optional(),
  user: joi.string().optional(),
});

export const blogValSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    photo: joi.string().optional(),
    description: joi.string().optional(),
    user: joi.string().optional(),
  });