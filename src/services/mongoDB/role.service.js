import { getUuid } from "../../configs/uuid.config.js";
import Role from "../../models/general/role.model.js";
import { updateSeq } from "./seq.service.js";

export const createRole = async (data) => {
  const seq = await updateSeq("Role");
  const _id = getUuid();
  const newRole = await Role.create({
    _id,
    ...data,
  });
  return newRole;
};

export const getRoleByName = async (name) => {
  const role = await Role.findOne({ name });
  return role;
};
