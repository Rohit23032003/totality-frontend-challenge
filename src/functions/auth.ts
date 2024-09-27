
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebaseConfig";
import { doc, setDoc , getDoc } from "firebase/firestore";

export const signupUser = async (username: string, email: string, password: string): Promise<string> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      username,
      email,
    });

    return "Signup successful!";
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred during signup.";
  }
};


export const loginUser = async (email: string, password: string): Promise<{ message: string; userDetails?: { username: string; email: string } }> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Retrieve user details from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return {
        message: "Login successful!",
        userDetails: {
          username: userData.username,
          email: userData.email,
        },
      };
    } else {
      return { message: "User data not found." };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: `error: ${error.message}` };
    }
    return { message: "An unknown error occurred during login." };
  }
};


