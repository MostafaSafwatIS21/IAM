// check if user is authenticated by his token in cookies
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import AppError from "../utils/AppError.js";
import { log } from "console";
export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return next(new AppError("You are not logged in", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return next(new AppError("Invalid token", 401));
    }
    const user = await userModel.findById(decoded.user._id);
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in isAuthenticated middleware:", error);

    next(new AppError(`Authentication failed ${error}`, 401));
  }
};

export const isAuthorized = async (req, res, next) => {
  const page = req.path.split("/").pop();
  const method = req.method;
  console.log("page", page);

  const action = {
    GET: "viewing",
    POST: "creating",
    PUT: "editing",
    PATCH: "editing",
    DELETE: "deleting",
  };
  const user = await userModel.findById(req.user._id).populate("roles");

  // console.log("User role:", user.roles.permissions);
  if (!user.roles || !user.roles.permissions) {
    return next(new AppError("User or permissions not found", 403));
  }

  const hasPermission = user.roles.permissions.some(
    (permission) => permission.model === page && permission[action[method]]
  );

  console.log(
    `User ${user.username} trying to access ${page} with method ${action[method]}. Has permission: ${hasPermission}`
  );

  if (!hasPermission) {
    return next(
      new AppError(
        `You do not have permission to ${action[method]} this ${page}.`,
        403
      )
    );
  }
  next();
};
