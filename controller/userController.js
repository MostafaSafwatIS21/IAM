import userModel from "../model/userModel.js";
import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    // Generate JWT token
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Prevent CSRF attacks
    });
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new AppError("Invalid Email or password", 404));
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next(new AppError("Invalid Email or password", 404));
    }
    // Generate JWT token
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Prevent CSRF attacks
    });
    res.status(200).json({
      message: "User logged in successfully",
      user: user,
      token: token,
    });
  } catch (error) {}
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully" });
};
export const currentUser = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const authCallback = async (req, res, next) => {
  console.log(req.user);
  const { email, photo, fullName, provider } = req.user;
  if (req.user) {
    let user = await userModel.findOne({ email });
    if (user) {
      return next(new AppError("Email Already exist You can login"));
    }
    user = await new userModel({
      username: fullName,
      email,
      profilePicture: photo,
      provider,
    }).save({ validateBeforeSave: false });

    // send token
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Prevent CSRF attacks
    });
    return res.status(200).json({
      message: "User logged in successfully",
      user: user,
      token: token,
    });
    console.log(user);
    return res.send("Finally");
  }
};
