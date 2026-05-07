import heroiamge from "../assets/images/image-home-hero-large.webp";
import cookimage from "../assets/images/image-home-real-life-large.webp";

export default function Home() {
  return (
    <main className="bg-[#f7f5f2] text-[#123c38]">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          <span className="bg-[#f6c9a8] px-2 rounded">Healthy</span> meals, zero fuss
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Discover eight quick, whole-food recipes that you can cook tonight
          <br />—no processed junk, no guesswork.
        </p>
        <button className="bg-[#123c38] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition">
          Start exploring
        </button>

        <div className="mt-14 rounded-3xl overflow-hidden border-4 border-white shadow-lg">
          <img
            src={heroiamge}
            alt="Healthy cooking"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-14">What you’ll get</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center mb-4">🥕</div>
            <h3 className="text-2xl font-semibold mb-2">Whole-food recipes</h3>
            <p className="text-gray-600">Each dish uses everyday, unprocessed ingredients.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center mb-4">⚡</div>
            <h3 className="text-2xl font-semibold mb-2">Minimum fuss</h3>
            <p className="text-gray-600">All recipes are designed to make eating healthy quick and easy.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center mb-4">🔎</div>
            <h3 className="text-2xl font-semibold mb-2">Search in seconds</h3>
            <p className="text-gray-600">Filter by name or ingredient and jump straight to the recipe you need.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Built for real life</h2>
          <p className="text-gray-600 text-lg leading-8">
            Cooking shouldn’t be complicated. These recipes come in under
            <span className="text-[#f4a261] font-semibold"> 30 minutes</span> of active time,
            fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="text-gray-600 text-lg leading-8 mt-4">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
          </p>
        </div>
        <img
          src={cookimage}
          alt="Cooking vegetables"
          className="rounded-3xl shadow-lg w-full h-[380px] object-cover"
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#edf3ef] rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to cook smarter?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button className="bg-[#123c38] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition">
            Browse recipes
          </button>
        </div>
      </section>
    </main>
  );
}
