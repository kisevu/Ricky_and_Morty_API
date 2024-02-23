import { Location } from "@/types/location";
import Link from "next/link";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <div className="flex flex-col shadow-xl p-8 rounded-md w-full bg-slate-300">
      <div className="flex items-center">
        <h3 className="text-2xl font-bold mr-5">Name:</h3>
        <Link
          href={`/locations/${location.id}`}
          className="flex text-lg text-primary font-semibold"
        >
          {location.name}
        </Link>
      </div>
      <div className="mt-3">
        <span className="font-bold text-2xl mr-5">Type:</span>
        <span>{location.type}</span>
      </div>
      <Link
        href={`/locations/${location.id}`}
        className="flex text-lg mt-5 font-semibold bg-primary text-whiten w-36 p-3 rounded-md"
      >
        View Details
      </Link>
    </div>
  );
}
