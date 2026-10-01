import { Router } from "express";
import { registerUser } from "../services/auth.service";

export const authRouter = Router();

authRouter.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await registerUser(email, password);

    res.status(201).json({
        success:true,
        message:"Registration completed you can proceed to login"
    })
  } catch (error) {
    next(error);
  }
});
