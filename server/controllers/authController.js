import bcrypt from "bcryptjs";

import crypto from "crypto";

import User from "../models/User.js";

import generateToken from "../utils/generateToken.js";

// ================= REGISTER =================

export const registerUser = async (
  req,
  res
) => {

  try {

    const {
      fullName,
      username,
      email,
      password,
      confirmPassword,
    } = req.body;

    // Validation

    if (
      !fullName ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {

      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Password Match

    if (
      password !== confirmPassword
    ) {

      return res.status(400).json({
        message:
          "Passwords do not match",
      });
    }

    // Existing User

    const existingUser =
      await User.findOne({
        $or: [
          { email },
          { username },
        ],
      });

    if (existingUser) {

      return res.status(400).json({
        message:
          "User already exists",
      });
    }

    // Hash Password

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // Create User

    const user =
      await User.create({
        fullName,
        username,
        email,
        password: hashedPassword,
      });

    // Token

    const token =
      generateToken(user._id);

    // Response

    res.status(201).json({

      success: true,

      token,

      user: {
        id: user._id,
        fullName:
          user.fullName,
        username:
          user.username,
        email:
          user.email,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Server Error",
    });
  }
};

// ================= LOGIN =================

export const loginUser = async (
  req,
  res
) => {

  try {

    const {
      emailOrUsername,
      password,
    } = req.body;

    // Find User

    const user =
      await User.findOne({
        $or: [
          {
            email:
              emailOrUsername,
          },
          {
            username:
              emailOrUsername,
          },
        ],
      });

    if (!user) {

      return res.status(400).json({
        message:
          "Invalid credentials",
      });
    }

    // Compare Password

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        message:
          "Invalid credentials",
      });
    }

    // Generate Token

    const token =
      generateToken(user._id);

    // Response

    res.status(200).json({

      success: true,

      token,

      user: {
        id: user._id,
        fullName:
          user.fullName,
        username:
          user.username,
        email:
          user.email,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Server Error",
    });
  }
};

// ================= FORGOT PASSWORD =================

export const forgotPassword =
  async (req, res) => {

    try {

      const { email } =
        req.body;

      const user =
        await User.findOne({
          email,
        });

      if (!user) {

        return res.status(404).json({
          message:
            "User not found",
        });
      }

      // Temporary token

      const resetToken =
        crypto
          .randomBytes(32)
          .toString("hex");

      res.status(200).json({
        success: true,
        message:
          "Reset link generated",
        resetToken,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  };