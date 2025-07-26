import Role from "../model/roleModel.js";
import AppError from "../utils/AppError.js";
import systemPages from "../enums/systemRole.js";
import { log } from "util";

export const createRole = async (req, res, next) => {
  const { name, permissions } = req.body;
  //   console.log(permissions);

  if (!name || !permissions) {
    return next(new AppError("Name and permission are required", 400));
  }
  try {
    // let lastPerm = Object.values(systemPages).map((pageName) => ({
    //   //   model: pageName, // This will be "dashboard", "settings", etc.
    //   //   viewing: false,
    //   //   editing: false,
    //   //   deleting: false,
    //   //   creating: false,
    // }));
    // lastPerm = [...lastPerm, ...permissions];
    // console.log(lastPerm);
    permissions.forEach((perm) => {
      if (!systemPages[perm.model]) {
      }
    });

    const role = await Role.create({
      name,
      permissions,
    });
    res.status(201).json({
      status: "success",
      data: {
        role,
      },
    });
  } catch (error) {
    return next(new AppError(error, 500));
  }
};

export const updateRole = async (req, res, next) => {
  const { id } = req.params;
  const { name, permissions } = req.body;

  try {
    const role = await Role.findByIdAndUpdate(
      id,
      { name, permissions },
      { new: true, runValidators: true }
    );

    if (!role) {
      return next(new AppError("Role not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        role,
      },
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};
