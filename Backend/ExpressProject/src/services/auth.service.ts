import { appError } from "../errors/AppError";
import { createUser, findUserByEmail } from "../repositories/user.repository";
import bcrypt from "bcrypt";

export async function registerUser(
  email: string,
  password: string,
): Promise<void> {
  if (!email || !password) {
    throw new appError(400, "Email and Password are required");
  }
  if (password.length <= 6) {
    throw new appError(
      400,
      "Password length is too short must be 6 character long",
    );
  }
  const normalizeEmail = email.toLowerCase().trim();
  // Find if the user is already found in the db if yes we won't allow to same email to register
  const existingUser = await findUserByEmail(normalizeEmail);
  if (existingUser) {
    throw new appError(409, "Email already present");
  }
  // we will hash the password
  const passwordHash = await bcrypt.hash(password, 10);
  await createUser(normalizeEmail, passwordHash);
}
