export default function Newsletter() {
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">Subscribe To Newsletter</h1>
        <div className="py-4">
          <input
            type="email"
            className="shadow border rounded w-7/12 py-3 px-3 text-gray-700 focus:outline focus:shadow-outline"
            placeholder="Enter Your Email"
          />
        </div>
        <button className="bg-emerald-800 px-20 py-2 rounded-full text-gray-50 text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
}
