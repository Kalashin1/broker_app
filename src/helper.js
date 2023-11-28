import { auth, db } from "./firebase-settings";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  addDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";

export const login = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return [null, user];
  } catch (error) {
    return [error, null];
  }
};

export const createAccount = async ({ name, email, password }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName: name });
    await setDoc(doc(db, "plans", user.uid), {
      name,
      email,
      investments: [],
      withdrawalRequest: false,
      createdAt: new Date().getTime(),
    });
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};

export let requestWithdrawal = async ({ uid, amount }) => {
  try {
    const docRef = doc(db, "plans", uid);
    const docSnap = await getDoc(docRef);
    const user = docSnap.data();
    const { investments } = user;
    if (amount > investments[0].roi) {
      return ["amount exceeds current profit!", null];
    }
    investments[0].roi = parseInt(investments[0].roi) - parseInt(amount);
    await updateDoc(doc(db, "plans", uid), {
      withdrawalRequest: true,
      investments,
    });
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};

export let requestCryptoWithdrawal = async ({ uid, amount, address }) => {
  try {
    const docRef = doc(db, "plans", uid);
    const docSnap = await getDoc(docRef);
    const user = docSnap.data();
    const { investments } = user;
    console.log(investments);
    if (typeof investments[0] === "undefined") {
      return ["You have not registered to any plan yet", null];
    }
    if (amount > investments[0].roi) {
      return ["amount exceeds current profit!", null];
    }
    investments[0].roi = parseInt(investments[0].roi) - parseInt(amount);
    await updateDoc(doc(db, "plans", uid), {
      withdrawalRequest: true,
      investments,
      withdrawalAmount: amount,
      type: "BTC",
      address,
    });
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};

export const removeInvestedUser = async (user) => {
  try {
    await updateDoc(doc(db, "plans", user.id), {
      invested: false,
      investments: [],
    });
    return [null, "user has been removed from investment plan"];
  } catch (error) {
    return [error.message, null];
  }
};

export const updateInvestment = async ({
  name,
  duration,
  capital,
  roi,
  id,
}) => {
  try {
    await updateDoc(doc(db, "investments", id), {
      name,
      duration,
      capital,
      roi,
    });
    return [null, "Investment Updated!"];
  } catch (error) {
    return [error.message, null];
  }
};

export const createInvestment = async ({ name, duration, capital, roi }) => {
  try {
    await addDoc(collection(db, "investments"), {
      name,
      duration,
      capital,
      roi,
    });
    return [null, "Investment Created!"];
  } catch (error) {
    console.log(error);
  }
};

export const deleteInvestment = async ({ id }) => {
  try {
    const proceed = window.confirm("Proceed to delete?");
    if (proceed) {
      await deleteDoc(doc(db, "investments", id));
      return [null, "investment deleted"];
    }
  } catch (error) {
    return [error.message, null];
  }
};

export const deleteUser = async (userId) => {
  try {
    let res = window.confirm("Are you sure you want to delete the user?");
    if (res) {
      await deleteDoc(doc(db, "plans", userId));
      alert("User has been deleted");
      history.go(0);
    }
  } catch (error) {
    return [error.message, null];
  }
};

export const updateRoi = async ({ id, num }) => {
  try {
    const docSnap = await getDoc(doc(db, "plans", id));
    const user = docSnap.data();
    console.log(docSnap.data());
    user.investments[0].roi = num;
    let updatedInvestments = user.investments;
    await updateDoc(doc(db, "plans", id), {
      investments: updatedInvestments,
    });
    return [null, "mining edited"];
  } catch (error) {
    return [error.message, null];
  }
};

export const editProfile = async ({ 
  user, 
  plan, 
  investments 
}) => {
  try {
    let { city, region } = user;
  console.log(user, plan, investments);
  let _investment = investments.find((i) => i.id === plan);

  _investment.startDate = new Date();
  _investment.active = true;
  console.log(_investment);
  // Add a new document in collection "cities"
  await updateDoc(doc(db, "plans", user.id), {
    city,
    region,
    invested: true,
    paused: false,
    investments: [_investment],
  });
  return [null, 'Profile Updated!']
  } catch (error) {
    return [error.message, null]
  }
};
