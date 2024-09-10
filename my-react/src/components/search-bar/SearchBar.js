export default function SearchBar() {
  return (
    <div className="flex flex-row items-center">
      <input type="text" placeholder="Search..." className="p-2 border border-gray-300 rounded-lg" />
      <button className="bg-blue-500 text-white p-2 rounded-lg ml-2">Search</button>
    </div>
  )
}