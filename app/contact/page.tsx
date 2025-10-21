"use client";

import ButtonComponent from "../button";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Customer Support",
      phone: "+254700123456",
      email: "alice@company.com",
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Technical Lead",
      phone: "+254711223344",
      email: "michael@company.com",
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Sales Manager",
      phone: "+254722334455",
      email: "sarah@company.com",
    },
    {
      id: 4,
      name: "David Brown",
      role: "Marketing Executive",
      phone: "+254733445566",
      email: "david@company.com",
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "HR Manager",
      phone: "+254744556677",
      email: "emily@company.com",
    },
  ];

  return (
    <div className="space-y-10">
      {/* 🔹 Header Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Contact <span className="text-indigo-300">Our Team</span>
        </h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">
          Get in touch with any of our team members below — we’re always happy
          to help you out!
        </p>
      </section>

      {/* 🔹 CTA Button */}
      <section className="flex justify-center">
        <ButtonComponent />
      </section>

      {/* 🔹 Contact Table */}
      <section className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-white/10">
        <h2 className="text-2xl font-semibold text-indigo-100 mb-6 text-center">
          Team Directory
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-indigo-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-semibold">Role</th>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Phone</th>
                <th className="px-4 py-3 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="hover:bg-white/10 transition-colors duration-300"
                >
                  <td className="px-4 py-3 text-indigo-100 font-medium">
                    {contact.name}
                  </td>
                  <td className="px-4 py-3 text-indigo-200">{contact.role}</td>
                  <td className="px-4 py-3 text-indigo-200">{contact.email}</td>
                  <td className="px-4 py-3 text-indigo-200">{contact.phone}</td>
                  <td className="px-4 py-3 text-center">
                    <a
                      href={`tel:${contact.phone}`}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1.5 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                      📞 Call
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
