"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, createUser, deleteUser, updateUser } from "@/lib/userService";

export default function UsersPage() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [userData, setUserData] = useState({ name: "", email: "" });

  // 🟢 Fetch users (cached)
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // 🟢 Add User
  const addUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  // 🟢 Update User
  const updateUserMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => updateUser(id, data),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  // 🟢 Delete User
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  // 🟢 Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.name || !userData.email) return alert("Fill in all fields!");

    try {
      if (editingUser) {
        await updateUserMutation.mutateAsync({ id: editingUser.id, data: userData });
      } else {
        await addUserMutation.mutateAsync(userData);
      }

      setShowForm(false);
      setEditingUser(null);
      setUserData({ name: "", email: "" });
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  // 🟢 Delete
  const handleDeleteUser = async (id: string) => {
    if (confirm("Delete this user?")) {
      await deleteUserMutation.mutateAsync(id);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-indigo-300 text-xl font-semibold">
        ⏳ Loading users...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6 text-white">
      <h1 className="text-4xl font-extrabold text-indigo-100 mb-8 drop-shadow-md tracking-wide">
        👥 Users Directory
      </h1>

      <button
        onClick={() => {
          setEditingUser(null);
          setUserData({ name: "", email: "" });
          setShowForm(true);
        }}
        className="mb-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        ➕ Add User
      </button>

      {users.length === 0 ? (
        <p className="text-indigo-200 text-lg mt-4">No users found 😕</p>
      ) : (
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl border border-white/10 overflow-hidden text-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-indigo-700/70 text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-3 text-left">Profile</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {users.map((user: any) => (
                <tr key={user.id} className="hover:bg-white/10 transition-colors duration-200">
                  <td className="px-6 py-3">
                    <img
                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(user.name)}`}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-indigo-300 shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-3 font-semibold text-indigo-100">{user.name}</td>
                  <td className="px-6 py-3 text-indigo-200">{user.email}</td>
                  <td className="px-6 py-3 text-center flex justify-center space-x-3">
                    <button
                      onClick={() => {
                        setEditingUser(user);
                        setUserData({ name: user.name, email: user.email });
                        setShowForm(true);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-indigo-100 mb-6">
              {editingUser ? "✏️ Edit User" : "➕ Add New User"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-indigo-200 outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-indigo-200 outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-500/50 hover:bg-gray-400/50 rounded-lg text-white transition"
                >
                  ❌ Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold transition"
                >
                  {editingUser ? "💾 Save Changes" : "➕ Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
