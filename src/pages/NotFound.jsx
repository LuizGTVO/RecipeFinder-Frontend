import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="bg-[#f7f5f2] text-[#123c38] min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* Decorative emoji cluster */}
        <div className="flex justify-center gap-3 text-4xl mb-6 select-none">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>🥗</span>
          <span className="animate-bounce" style={{ animationDelay: "0.15s" }}>🍳</span>
          <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>🥑</span>
        </div>

        {/* Big 404 */}
        <h1 className="text-[8rem] md:text-[10rem] font-extrabold leading-none tracking-tighter text-[#123c38]/10">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold -mt-6 mb-4">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-[#5f6f6d] text-lg leading-relaxed mb-8">
          Looks like this recipe went missing! The page you're looking for
          doesn't exist or may have been moved.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-[#123c38] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            Back to Home
          </Link>

          <Link
            to="/recipes"
            className="border-2 border-[#123c38] text-[#123c38] px-8 py-4 rounded-xl font-medium hover:bg-[#123c38] hover:text-white transition"
          >
            Browse Recipes
          </Link>
        </div>
      </div>
    </main>
  );
}