import { get, ref } from "firebase/database";
import { auth, database } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const getNannies = async () => {
  try {
    const nanniesRef = ref(database, "/nannies");
    const snapshot = await get(nanniesRef);
    const nannies = snapshot.val();

    return nannies;
  } catch (error) {
    throw new Error("Oops... Something went wrong. Please, try again later.");
  }
};

export const logInUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error("Your email or password is incorrect.");
  }
};

export const registrationUser = async (name, email, password) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userData;
    await updateProfile(user, { displayName: name });
  } catch (error) {
    throw new Error(`User with email ${email} is already exists.`);
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error("Oops... Something went wrong. Please, try again later.");
  }
};