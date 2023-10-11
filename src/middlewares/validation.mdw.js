import asyncHandler from "express-async-handler";

export const validate = (schema) => {
  return asyncHandler(async (req, res, next) => {
    const data = req.body;

    const { error } = await schema.validate(data);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    next();
  });
};
