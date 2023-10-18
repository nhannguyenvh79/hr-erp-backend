import * as Yup from "yup";

export const createRoleSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  roleCode: Yup.number().required("Role code is required"),
  authorities: Yup.array(),
});
