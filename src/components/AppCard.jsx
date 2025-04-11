import Tag from './Tag';

export default function AppCard({ app }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow p-4 flex flex-col justify-between hover:shadow-md transition">

      {/* 🟦 NSFW + Pricing Top-Right */}
      <div className="absolute top-3 right-3 flex gap-2">
        <div className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700 border border-gray-300">
          {app.nsfwLevel}
        </div>
        <div className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700 border border-gray-300">
          {app.pricingTier}
        </div>
      </div>

      {/* 🧠 Icon + Name */}
      <div className="flex items-center mb-3">
        <img
          src={app.icon}
          alt={app.name}
          className="w-10 h-10 rounded mr-3 object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
      </div>

      {/* ✏️ Excerpt */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{app.excerpt}</p>

      {/* 🏷️ Categories */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {app.categories.slice(0, 4).map((cat) => (
          <span
            key={cat}
            className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700 border border-gray-300"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}
