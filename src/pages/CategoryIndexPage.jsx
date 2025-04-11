import { useState } from 'react';
import categoryIndex from '../data/categoryIndex.json';
import featuredArticles from '../data/featuredArticles.json';

export default function CategoriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePage, setArticlePage] = useState(1);

  const perPage = 6;
  const articlePerPage = 5;

  const totalPages = Math.ceil(categoryIndex.length / perPage);
  const articleTotalPages = Math.ceil(featuredArticles.length / articlePerPage);

  const paginatedCategories = categoryIndex.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const paginatedArticles = featuredArticles.slice(
    (articlePage - 1) * articlePerPage,
    articlePage * articlePerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-24">
      {/* 🔖 Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Explore by Category</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Choose from a wide variety of categories to discover NSFW and Adult AI tools.
        </p>
      </div>

      {/* 🗂️ Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {paginatedCategories.map((cat) => (
          <div key={cat.name} className="bg-white p-4 border border-gray-200 rounded shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-semibold text-gray-800 uppercase">{cat.name}</h2>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                {cat.count} tools
              </span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {cat.examples.map((example, i) => (
                <li key={i}>• {example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 📄 Category Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4 mb-12">
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

      {/* 📰 Featured Articles */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
      <div className="space-y-6 mb-8">
        {paginatedArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white border border-gray-200 rounded p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{article.intro}</p>
            <a href={article.link} className="text-blue-600 text-sm hover:underline">
              Read more →
            </a>
          </div>
        ))}
      </div>

      {/* 📄 Articles Pagination */}
      {articleTotalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: articleTotalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setArticlePage(i + 1)}
              className={`px-3 py-1 text-sm rounded ${
                articlePage === i + 1
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
