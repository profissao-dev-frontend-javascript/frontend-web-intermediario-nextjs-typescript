"use client";

import { SearchResult } from "@/model/SearchResult";
import { useState } from "react";
import SearchForm from "./SearchForm";

export default function Search() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <>
      <SearchForm onSearchResultsReady={setSearchResults} />

      {/* TODO: Exercício - realizar a extração do componente de Lista e de Card */}
      {/* Search Result List */}
      <div className="text-black my-8 w-full">
        <h2 className="text-lg font-bold">Search Results</h2>

        <div className="flex flex-col my-4 gap-4">
          {searchResults.length === 0 && <div>No results found.</div>}

          {/* Search Result Card */}
          {searchResults.map((searchResult, index) => (
            <a
              href={searchResult.url}
              key={`searchResult_${index}`}
              data-test={`search_result_${index}`}
              className="flex flex-col p-2 border rounded-lg shadow text-left hover:bg-gray-100"
            >
              <h3 className="font-bold">{searchResult.title}</h3>
              <p>{searchResult.text}</p>
              <small>{searchResult.displayUrl}</small>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
