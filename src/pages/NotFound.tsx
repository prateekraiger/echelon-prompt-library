import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! Page not found.</p>
        <Link
          to="/"
          className="border border-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600/20 transition-all"
        >
          Go back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
