import { RequestHandler } from 'express';
import { z, ZodError } from 'zod';

export const validate = (schema: z.ZodTypeAny): RequestHandler => 
  (req, res, next) => {
    try {
      schema.parse(req.body); 
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation failed",
          errors: error.issues,
        });
      }
      next(error);
    }
  };