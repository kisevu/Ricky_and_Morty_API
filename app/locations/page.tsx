"use client";

import { useState, useEffect, Suspense } from "react";
import LocationCard from "@/components/LocationCard";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import { getAllLocations } from "../api/locations";
import { Location } from "@/types/location";

const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [totalPages, setTotalPages] = useState(1);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { info, results } = await getAllLocations(currentPage);
      setLocations(results);
      setTotalPages(info.pages);
    };

    fetchData();
  }, [currentPage]);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <h1 className="text-2xl font-bold">Locations</h1>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <div className="grid grid-cols-4 gap-10">
        {filteredLocations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <Pagination pages={totalPages} currentPage={Number(currentPage) - 1} />
    </main>
  );
};

export default Locations;
