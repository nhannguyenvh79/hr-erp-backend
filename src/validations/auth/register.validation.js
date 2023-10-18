import * as Yup from "yup";

export const registerSchema = Yup.object({
  eCode: Yup.string().required("Employee code is required"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
  role: Yup.string().required("Role is required"),
});
