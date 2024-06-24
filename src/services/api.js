import {
  get,
  limitToFirst,
  orderByKey,
  query,
  ref,
  set,
  startAfter,
} from "firebase/database";
import { auth, database } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const getNannies = async (index) => {
  const limit = 3;
  try {
    const nanniesRef = ref(database, "/nannies/nanniesList");
    let nanniesQuery;
    if (index) {
      nanniesQuery = query(
        nanniesRef,
        orderByKey(),
        startAfter(index),
        limitToFirst(limit)
      );
    } else {
      nanniesQuery = query(nanniesRef, orderByKey(), limitToFirst(limit));
    }
    const snapshot = await get(nanniesQuery);

    if (!snapshot.exists()) {
      return [];
    }

    const result = snapshot.val();

    const nannies = Object.keys(result).map((key) => ({
      id: key,
      ...result[key],
    }));

    return nannies;
  } catch (error) {
    throw new Error("Oops... Something went wrong. Please, try again later.");
  }
};

export const getFavoritesNannies = async (nanniesId) => {
  try {
    const promises = nanniesId.map(async (id) => {
      const snapshot = await get(ref(database, `/nannies/nanniesList/${id}`));

      if (snapshot.exists()) {
        return { id, ...snapshot.val() };
      } else {
        return null;
      }
    });
    const nannies = await Promise.all(promises);
    return nannies.filter((nanny) => nanny !== null);
  } catch (error) {
    throw new Error(`Error fetching favorites nannies.`);
  }
};

export const getNanniesTotal = async () => {
  try {
    const nanniesRef = ref(database, "/nannies/total");
    const snapshot = await get(nanniesRef);
    const total = snapshot.val();

    return total;
  } catch (error) {
    throw new Error("Sorry... Something went wrong.");
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
    await createUser(user.uid, { email, name });
  } catch (error) {
    throw new Error(`User with email ${email} is already exists.`);
  }
};

export const createUser = async (id, data) => {
  try {
    const userRef = ref(database, `/users/${id}`);

    await set(userRef, data);
  } catch (error) {
    throw new Error("Error adding user.");
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error("Oops... Something went wrong. Please, try again later.");
  }
};
