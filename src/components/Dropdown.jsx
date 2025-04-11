export default function Dropdown({ label, options, value, onChange }) {
    return (
      <div className="flex flex-col text-sm mb-2">
        <label className="mb-1 font-medium text-gray-700">{label}</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
  