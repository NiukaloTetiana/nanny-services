import { get, ref } from "firebase/database";
import { database } from "../firebase/config";

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
