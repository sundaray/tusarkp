"use server";

import { SignInEmailPasswordFormSchema } from "@/schema";
import { parseWithZod } from "@conform-to/zod";

/************************************************
 * Sign In With Email and Password
 ************************************************/

export async function signInWithEmailAndPassword(
  next: string,
  prevState: unknown,
  formData: FormData,
) {
  // Parse and validate form data using zod schema
  const submission = parseWithZod(formData, {
    schema: SignInEmailPasswordFormSchema,
  });

  // Return validation errors if any
  if (submission.status !== "success") {
    return submission.reply();
  }

  // Extract validated email and password
  const email = submission.value.email;
  const password = submission.value.password;

  console.log("User email: ", email);
  console.log("User password: ", password);
}
