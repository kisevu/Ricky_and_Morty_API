import { RICK_AND_MORTY_API_URL } from "@/config";
import { ApiResponse } from "@/types/apiResponse";
import { Location } from "@/types/location";

export async function getAllLocations(
  currentPage: string
): Promise<ApiResponse<Location[]>> {
  const response = await fetch(
    `${RICK_AND_MORTY_API_URL}/location?page=${currentPage}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getLocationById(locationId: string): Promise<Location> {
  const response = await fetch(
    `${RICK_AND_MORTY_API_URL}/location/${locationId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}
