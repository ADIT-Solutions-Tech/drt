import { useEffect, useState } from 'react';
import appsData from '../data/apps.json';
import categories from '../data/categories.json';
import AppCard from '../components/AppCard';
import CategoryButton from '../components/CategoryButton';
import Dropdown from '../components/Dropdown';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [nsfw, setNsfw] = useState('');
  const [pricing, setPricing] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  const filteredApps = appsData.filter((app) => {
    const matchSearch = app.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      !selectedCategory || app.categories.includes(selectedCategory);
    const matchNsfw = !nsfw || app.nsfwLevel === nsfw;
    const matchPricing = !pricing || app.pricingTier === pricing;
    return matchSearch && matchCategory && matchNsfw && matchPricing;
  });

  const totalPages = Math.ceil(filteredApps.length / perPage);
  const paginatedApps = filteredApps.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, nsfw, pricing]);

  return (
    <div>
      {/* 💬 HERO SECTION */}
      <section className="text-center py-10 mb-6 bg-[url('/grid-bg.svg')] bg-top bg-repeat">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Welcome to <span>DRT</span>
          <span className="italic text-gray-700">.fm</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl mx-auto">
          Discover and explore the best Adult and NSFW AI-powered tools and applications
        </p>

        {/* 🔍 Search Bar */}
        <div className="flex justify-center mb-6 mx-auto w-full max-w-2xl">
          <div className="flex items-center w-full border border-gray-300 rounded-md shadow-sm bg-white overflow-hidden">
            {/* Icon */}
            <div className="p-2 pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>

            {/* Input */}
            <input
              type="text"
              placeholder="Find AI apps"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow px-2 py-2 text-sm focus:outline-none"
            />

            {/* Button */}
            <button className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>

        {/* 🔘 Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {categories.primary.map((cat) => (
            <CategoryButton
              key={cat}
              label={cat}
              active={selectedCategory === cat}
              onClick={(label) =>
                setSelectedCategory((prev) => (prev === label ? '' : label))
              }
            />
          ))}
        </div>
      </section>

      {/* ⬇️ Secondary Filters */}
      <div className="flex gap-4 flex-wrap mb-6 px-4">
        <Dropdown
          label="NSFW Level"
          options={['None', 'Medium', 'High']}
          value={nsfw}
          onChange={setNsfw}
        />
        <Dropdown
          label="Pricing Tier"
          options={['Free', 'Freemium', 'Paid']}
          value={pricing}
          onChange={setPricing}
        />
      </div>

      {/* 🗂️ App Grid */}
      {paginatedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 px-4">
          {paginatedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm mb-6 px-4">No apps match your filters.</p>
      )}

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mb-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
