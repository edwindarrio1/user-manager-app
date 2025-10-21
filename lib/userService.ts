// lib/userService.ts
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

const usersCollection = collection(db, "users");

// 🟢 Get all users (one-time fetch)
export async function getUsers() {
  const snapshot = await getDocs(usersCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// 🟢 Real-time listener
export function listenToUsers(callback: (users: any[]) => void) {
  return onSnapshot(usersCollection, (snapshot) => {
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(users);
  });
}

// 🟢 Create a new user
export async function createUser(user: { name: string; email: string }) {
  return await addDoc(usersCollection, user);
}

// 🟢 Update a user
export async function updateUser(id: string, userData: { name: string; email: string }) {
  const userDoc = doc(db, "users", id);
  return await updateDoc(userDoc, userData);
}

// 🟢 Delete a user
export async function deleteUser(id: string) {
  const userDoc = doc(db, "users", id);
  return await deleteDoc(userDoc);
}
