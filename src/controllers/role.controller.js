import expressAsyncHandler from "express-async-handler";
import { createRole, getRoleByName } from "../services/mongoDB/role.service.js";
import { RESPONSE } from "../configs/constant/response.js";

export const create = expressAsyncHandler(async (req, res) => {
  let data = req.body;

  const existRole = await getRoleByName(data.name);

  if (existRole) {
    res.status(400);
    throw new Error("Role already exist");
  }

  const newRole = await createRole(data);

  res.send(RESPONSE(newRole, "Create Successfull!"));
});
