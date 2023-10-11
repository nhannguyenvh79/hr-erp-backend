import * as Yup from "yup";

export const registerSchema = Yup.object({
  employeeId: Yup.string().required("E-Id is required"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
  role: Yup.number().required("Role is required"),
});
