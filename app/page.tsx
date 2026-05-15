export default function SurinderSingputRealEstate() {
  const featuredProperties = [
    {
      title: "Luxury Family Home",
      location: "Brampton, Ontario",
      price: "$1,249,000",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Modern Downtown Condo",
      location: "Mississauga, Ontario",
      price: "$799,000",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Elegant Detached House",
      location: "Toronto, Ontario",
      price: "$1,599,000",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-black to-gray-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-32 h-32 object-contain"
            />

            <div>
              <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white">
                Surinder Singh Rajput Real Estate
              </h1>

              <p className="text-sm text-gray-300 mt-1">
                Trusted Real Estate Services Across Ontario
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#properties" className="hover:text-yellow-400 transition">
              Properties
            </a>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative h-[85vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Find Your Dream Home Today
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Buy, sell, and invest in premium properties with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#properties"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-2xl shadow-xl transition"
            >
              Explore Properties
            </a>

            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl transition"
            >
              Contact Agent
            </a>
          </div>
        </div>
      </section>

      <section id="properties" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold">Featured Properties</h3>
            <p className="text-gray-600 mt-4 text-lg">
              Explore handpicked listings in the best locations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-bold">{property.title}</h4>
                  <p className="text-gray-500 mt-2">{property.location}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-yellow-600 text-2xl font-bold">
                      {property.price}
                    </span>

                    <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
              alt="Real Estate"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">
              Your Trusted Real Estate Partner
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Surinder Singh Rajput Real Estate helps families and investors
              discover premium homes and smart property opportunities across
              Ontario.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black">
              Property Upload System
            </h3>
            <p className="text-gray-600 mt-4 text-lg">
              Add new property details easily.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Property Title"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Property Location"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Property Price"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Image URL"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
            />

            <textarea
              placeholder="Property Description"
              rows={5}
              className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 outline-none"
            ></textarea>

            <button
              className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition md:col-span-2"
            >
              Upload Property
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold">Get In Touch</h3>

          <form className="mt-14 bg-white text-black rounded-3xl p-8 shadow-2xl text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <textarea
              placeholder="Tell us about the property you're looking for..."
              rows={5}
              className="w-full mt-6 border border-gray-300 rounded-xl px-4 py-3 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-6 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black">
              Admin Dashboard
            </h3>
            <p className="text-gray-600 mt-4 text-lg">
              Manage property listings and client inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h4 className="text-5xl font-bold text-yellow-600">24</h4>
              <p className="mt-4 text-gray-600 text-lg">Active Listings</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h4 className="text-5xl font-bold text-yellow-600">12</h4>
              <p className="mt-4 text-gray-600 text-lg">New Leads</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h4 className="text-5xl font-bold text-yellow-600">8</h4>
              <p className="mt-4 text-gray-600 text-lg">Properties Sold</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-6 text-center text-sm">
        © 2026 Surinder Singh Rajput Real Estate. All rights reserved.
      </footer>
    </div>
  );
}
