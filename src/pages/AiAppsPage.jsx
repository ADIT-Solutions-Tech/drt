import { useState, useEffect } from 'react';
import data from '../data/aiAppsData.json';
import AppCard from '../components/AppCard';
import Dropdown from '../components/Dropdown';

export default function AiAppsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [nsfw, setNsfw] = useState('');
  const [pricing, setPricing] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const categories = ['All', ...new Set(data.categories.map((c) => c.name))];

  const filteredApps = data.apps.filter((app) => {
    const matchSearch = app.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === 'All' || app.categories.includes(selectedCategory);
    const matchNsfw = !nsfw || app.nsfwLevel === nsfw;
    const matchPricing = !pricing || app.pricingTier === pricing;
    return matchSearch && matchCategory && matchNsfw && matchPricing;
  });

  const totalPages = Math.ceil(filteredApps.length / pageSize);
  const paginatedApps = filteredApps.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, nsfw, pricing, pageSize]);

  const selectedCatMeta =
    selectedCategory === 'All'
      ? null
      : data.categories.find((cat) => cat.name === selectedCategory);

  const categoryApps = selectedCategory === 'All'
    ? data.apps
    : data.apps.filter((app) => app.categories.includes(selectedCategory));

  const allPlatforms = Array.from(
    new Set(categoryApps.flatMap((a) => a.platforms || []))
  );

  const allFeatures = Array.from(
    new Set(categoryApps.flatMap((a) => a.features || []))
  ).slice(0, 5);

  return (
    <div>
      {/* 🖼️ Hero Section + Category Pills */}
      <div className="bg-gray-100 pb-6"> {/* Added a container with a darker grey background */}
        {/* 🖼️ Hero Section */}
        <div className="text-center bg-[url('/grid-bg.svg')] bg-top bg-repeat py-12 px-4 mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            AI Applications
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Explore and filter the best AI tools by category, NSFW level, and pricing.
          </p>
        </div>

        {/* 🔘 Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-30 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-1 rounded-full border text-sm ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🧠 Description + Metadata Card */}
      {selectedCatMeta && (
        <div className="max-w-6xl mx-auto mb-15 px-4">
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_180px] gap-4">
              {/* Left Logo */}
              <div className="bg-gray-50 p-4 flex items-center justify-center border-r border-gray-200">
                <img
                  src={selectedCatMeta.extraInfo?.logo || '/icons/default-category.png'}
                  alt="Category logo"
                  className="h-16 object-contain"
                />
              </div>

              {/* Middle Description */}
              <div className="p-4 text-gray-700 text-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {selectedCatMeta.name}
                </h2>
                <p>
                  {showFullDesc
                    ? selectedCatMeta.description
                    : selectedCatMeta.description.slice(0, 200) + '...'}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded">Apps: {categoryApps.length}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    Users: {categoryApps.reduce((acc, app) => {
                      const num = typeof app.numUsers === 'string'
                        ? parseInt(app.numUsers.replace(/[^0-9]/g, '')) || 0
                        : app.numUsers || 0;
                      return acc + num;
                    }, 0).toLocaleString()}
                  </span>
                  {selectedCatMeta.extraInfo?.platforms?.map((p) => (
                    <span key={p} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{p}</span>
                  ))}
                  {selectedCatMeta.extraInfo?.features?.slice(0, 5).map((f, idx) => (
                    <span key={idx} className="bg-gray-200 px-2 py-1 rounded">{f}</span>
                  ))}
                </div>

                {/* Expanded Metadata */}
                {showFullDesc && selectedCatMeta.extraInfo && (
                  <div className="mt-10 text-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    <div><strong>No. of Apps:</strong> {selectedCatMeta.extraInfo.numApps}</div>
                    <div><strong>Users:</strong> {selectedCatMeta.extraInfo.numUsers}</div>
                    <div><strong>Platforms:</strong> {(selectedCatMeta.extraInfo.platforms || []).join(', ')}</div>
                    {selectedCatMeta.extraInfo.features?.slice(5).map((feat, i) => (
                      <div key={i}><strong>Feature:</strong> {feat}</div>
                    ))}
                  </div>
                )}

                {/* Expand Button */}
                <div className="mt-4 flex justify-end">
                  <button
                    className="text-sm bg-black text-white hover:bg-gray-800 px-3 py-1 rounded"
                    onClick={() => setShowFullDesc(!showFullDesc)}
                  >
                    {showFullDesc ? 'Show Less' : 'Expand Info'}
                  </button>
                </div>
              </div>

              {/* Right Screenshot */}
              <div className="bg-gray-50 p-4 flex items-center justify-center border-l border-gray-200">
                <img
                  src={selectedCatMeta.extraInfo?.screenshot || '/images/default-screenshot.png'}
                  alt="Screenshot"
                  className="h-24 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🎛 Filters + Search */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6 px-4 max-w-6xl mx-auto">
        <div className="flex gap-2">
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
        <input
          type="text"
          placeholder="Search AI tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>

      {/* 📦 Page Size Options */}
      <div className="flex justify-end px-4 max-w-6xl mx-auto mb-2">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
          className="text-sm border border-gray-300 rounded px-2 py-1"
        >
          {[6, 10, 25].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>

      {/* 🧱 App Grid */}
      {paginatedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto mb-10">
          {paginatedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mb-10">No apps match your filters.</p>
      )}

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mb-16">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded text-sm ${
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
