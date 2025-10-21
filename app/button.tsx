"use client";

export default function ButtonComponent() {
  const handleEmail = () => {
    window.location.href = "mailto:edwin.kariuki@mylemonade.io";
  };

  return (
    <button
      onClick={handleEmail}
      className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      📧 Email Us
    </button>
  );
}
