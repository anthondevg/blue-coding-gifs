import React from "react";
type searchbarType = {
  search: string;
  handleSearch: any;
  setSearch: any;
};

export default function Searchbar({
  handleSearch,
  search,
  setSearch,
}: searchbarType) {
  return (
    <form onSubmit={handleSearch} className="flex w-full  gap-4">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="text-white bg-zinc-900  p-3 h-full"
        aria-label="input to search gifs"
      />

      <button className="relative h-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-700 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Search Gifs
        </span>
      </button>
    </form>
  );
}
