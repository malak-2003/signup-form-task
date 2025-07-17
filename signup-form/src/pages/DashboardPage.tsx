import React from "react";

const DashboardPage = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  console.log(localStorage.getItem("currentUser"));
  console.log(localStorage.getItem("isLoggedIn"));
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-indigo-600">Dashboard</h1>
      <p className="mt-4 text-lg text-gray-700">
        Welcome {currentUser.fullName ? ` ${currentUser.fullName}` : ""} to your
        dashboard!
      </p>
      <button
        onClick={() => {
          localStorage.removeItem("currentUser");
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/login";
        }}
        className="mt-6 h-[50px] w-[300px] rounded-2xl bg-indigo-500 p-2 text-white transition hover:bg-indigo-600"
      >
        {" "}
        Log out{" "}
      </button>
    </div>
  );
};

export default DashboardPage;
