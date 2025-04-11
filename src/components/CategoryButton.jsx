export default function CategoryButton({ label, active, onClick }) {
    return (
      <button
        onClick={() => onClick(label)}
        className={`text-sm px-3 py-1 rounded-full border mr-2 mb-2 ${
          active
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`}
      >
        {label}
      </button>
    );
  }
  