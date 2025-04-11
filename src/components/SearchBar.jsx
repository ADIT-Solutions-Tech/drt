export default function SearchBar({ value, onChange }) {
    return (
      <div className="w-full mb-4">
        <input
          type="text"
          placeholder="Search apps..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>
    );
  }
  