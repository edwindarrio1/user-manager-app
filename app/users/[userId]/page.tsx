import Link from "next/link";

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return null;
  }
  const user = await res.json();
  return user;
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fetchUser(userId);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-red-600 text-xl font-semibold">User not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/10 text-white">
        {/* 🔹 Profile Icon */}
        <div className="flex justify-center mb-6">
          <img
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
              user.name
            )}`}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-indigo-400 shadow-md"
          />
        </div>

        {/* 🔹 User Name */}
        <h1 className="text-3xl font-bold text-indigo-200 mb-6 text-center tracking-wide drop-shadow-sm">
          {user.name}
        </h1>

        {/* 🔹 User Info Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-indigo-700 text-white">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Field</th>
                <th className="px-4 py-2 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/10 transition-colors">
                <td className="px-4 py-2 font-medium text-indigo-100">Email</td>
                <td className="px-4 py-2 text-indigo-200">{user.email}</td>
              </tr>
              <tr className="hover:bg-white/10 transition-colors">
                <td className="px-4 py-2 font-medium text-indigo-100">Phone</td>
                <td className="px-4 py-2 text-indigo-200">{user.phone}</td>
              </tr>
              <tr className="hover:bg-white/10 transition-colors">
                <td className="px-4 py-2 font-medium text-indigo-100">Website</td>
                <td className="px-4 py-2">
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-indigo-200 hover:underline transition-colors"
                  >
                    {user.website}
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-white/10 transition-colors">
                <td className="px-4 py-2 font-medium text-indigo-100">Company</td>
                <td className="px-4 py-2 text-indigo-200">{user.company.name}</td>
              </tr>
              <tr className="hover:bg-white/10 transition-colors">
                <td className="px-4 py-2 font-medium text-indigo-100">Address</td>
                <td className="px-4 py-2 text-indigo-200">
                  {user.address.street}, {user.address.city}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 🔹 Back to Users Button */}
        <div className="text-center">
          <Link
            href="/users"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            ← Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
