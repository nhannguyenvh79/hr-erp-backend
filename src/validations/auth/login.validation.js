import * as Yup from "yup";

export const loginSchema = Yup.object({
  eCode: Yup.string().required("Employee code is required"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
});
