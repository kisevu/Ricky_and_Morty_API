import Image from "next/image";
import Link from "next/link";
import { getLocationById } from "@/app/api/locations";
import React from "react";
import { BsDashCircleFill } from "react-icons/bs";
import { getCharactersFromUrls } from "@/app/api/characters";

const Location = async ({ params }: { params: { id: string } }) => {
  const locationId = params.id;
  const location = await getLocationById(locationId);
  const residents = await getCharactersFromUrls(location.residents);
  return (
    <main className="py-10 bg-whiten min-h-screen">
      <div className="flex justify-center items-center flex-col m-auto">
        <div className="flex flex-col p-5 shadow-2xl rounded-md cursor-pointer">
          <h1 className="text-2xl text-body mt-0 mb-5">{location.name}</h1>
          <div className="grid">
            <div className="flex items-center">
              <span className="font-bold">Type:</span>
              <span className="ml-5">{location.type}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold">Dimension:</span>
              <span className="ml-5">{location.dimension}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold">Created:</span>
              <span className="ml-5">
                {new Date(location.created).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col mt-5 justify-center items-center w-full m-auto shadow-body">
          <h2 className="text-2xl">Residents</h2>
          {location.residents.length === 0 ? (
            <span className="flex items-center shadow-2xl rounded-md mt-10">
              <i className="mr-5">
                <BsDashCircleFill size={30} />
              </i>
              There are no residents in this location
            </span>
          ) : (
            <div className="grid grid-cols-4 m-auto gap-10 mt-10 shadow-2xl p-10 rounded-md">
              {residents.map((resident: any) => (
                <div key={resident.id} className="gap-10">
                  <div className="flex w-10">
                    <Image
                      src={resident.image}
                      alt={resident.name}
                      width={300}
                      height={300}
                      priority
                      className="flex rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <p>Name:</p>
                      <Link
                        href={`/characters/${resident.id}`}
                        className="flex ml-3 text-primary"
                      >
                        {resident.name}
                      </Link>
                    </div>
                    <span>Status: {resident.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Location;
