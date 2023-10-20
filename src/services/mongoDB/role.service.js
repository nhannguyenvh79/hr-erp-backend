import { getUuid } from "../../configs/uuid.config.js";
import Role from "../../models/general/role.model.js";
import { updateSeq } from "./seq.service.js";

export const createRole = async (data) => {
  const seq = await updateSeq("Role");

  const newRole = await Role.create(data);
  return newRole;
};

export const getRoleByName = async (name) => {
  const role = await Role.findOne({ name });
  return role;
};
