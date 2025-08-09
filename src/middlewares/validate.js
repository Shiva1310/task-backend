// middlewares/validate.js
export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false }); // abortEarly:false → shows all errors
  if (error) {
  return res.status(400).json({
    error: error.details[0].message.replace(/["]/g, '')
  });
}
  next();
};
