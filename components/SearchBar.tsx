"use client";
import React from "react";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchProps) => {
  return (
    <div className="flex w-1/4">
      <input
        type="text"
        placeholder="Search locations..."
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-3 py-3 mt-3 mb-5 w-full"
      />
    </div>
  );
};

export default SearchBar;
