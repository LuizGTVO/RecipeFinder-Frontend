import missionImg from "../assets/images/image-about-our-mission-large.webp";
import beyondImg from "../assets/images/image-about-beyond-the-plate-large.webp";

export default function About() {
  return (
    <main className="bg-[#f7f5f2] text-[#123c38]">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-[#f4a261] text-white px-3 py-1 rounded-md text-sm">
            Our mission
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Help more people cook nourishing meals, more often.
          </h1>

          <p className="text-[#5f6f6d] mt-6 leading-7">
            Healthy Recipe Finder was created to prove that healthy eating can be convenient,
            affordable, and genuinely delicious.
          </p>

          <p className="text-[#5f6f6d] mt-4 leading-7">
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment,
            no ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>

        <img
          src={missionImg}
          alt="Our mission"
          className="rounded-2xl shadow-md w-full h-[400px] object-cover"
        />
      </section>

      {/* WHY WE EXIST */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why we exist</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">• Cut through the noise</h3>
            <p className="text-[#5f6f6d] mt-2">
              The internet is full of recipes, but most people still default to fast food.
              We simplify things so you can cook without wasting time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">• Empower home kitchens</h3>
            <p className="text-[#5f6f6d] mt-2">
              When you control your ingredients, you control your health and lifestyle.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">• Make healthy look good</h3>
            <p className="text-[#5f6f6d] mt-2">
              Beautiful food inspires confidence and makes cooking more enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our food philosophy
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">• Whole ingredients first</h3>
            <p className="text-[#5f6f6d] mt-2">
              Real food, fresh and natural, is always the priority.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">• Flavor without compromise</h3>
            <p className="text-[#5f6f6d] mt-2">
              Taste matters—without needing artificial ingredients.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">• Respect for time</h3>
            <p className="text-[#5f6f6d] mt-2">
              Recipes are made to fit into real-life routines.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">• Sustainable choices</h3>
            <p className="text-[#5f6f6d] mt-2">
              Less waste, better for you and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* BEYOND */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Beyond the plate
          </h2>

          <p className="text-[#5f6f6d] mb-6">
            Food brings people together and improves well-being.
          </p>

          <ul className="text-[#5f6f6d] space-y-3 list-disc pl-5">
            <li>Encourage family meals</li>
            <li>Reduce delivery waste</li>
            <li>Explore seasonal foods</li>
          </ul>
        </div>

        <img
          src={beyondImg}
          alt="Beyond the plate"
          className="rounded-2xl shadow-md w-full h-[350px] object-cover"
        />
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#e9f0ec] rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to cook smarter?
          </h2>

          <p className="text-[#5f6f6d] mb-8">
            Pick a recipe and get dinner ready fast.
          </p>

          <button className="bg-[#123c38] text-white px-8 py-4 rounded-xl">
            Browse recipes
          </button>
        </div>
      </section>
    </main>
  );
}