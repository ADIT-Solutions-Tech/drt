import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm px-6 py-4 flex items-center justify-between relative">
      {/* Left: Logo */}
      <Link to="/" className="text-xl font-bold text-gray-800">
        DRT.fm
      </Link>

      {/* Center: Nav */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-sm font-semibold text-gray-900">
        <Link to="/" className="hover:text-blue-600 transition">All Apps</Link>
        <Link to="/categories" className="hover:text-blue-600 transition">Categories</Link>
        <Link to="/ai-apps" className="hover:text-blue-600 transition">Ai-Apps</Link>
        <Link to="/bot" className="hover:text-blue-600 transition">
          DRTy Bot <span className="text-orange-500">🔥</span>
        </Link>
      </nav>

      {/* Right: Placeholder to balance flex */}
      <div className="w-[72px]" />
    </header>
  );
}
