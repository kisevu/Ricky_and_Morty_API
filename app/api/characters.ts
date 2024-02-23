import { RICK_AND_MORTY_API_URL } from "@/config";
import { ApiResponse } from "@/types/apiResponse";
import { ICharacter } from "@/types/character";

export async function getAllCharacters(
  currentPage: string
): Promise<ApiResponse<ICharacter[]>> {
  const response = await fetch(
    `${RICK_AND_MORTY_API_URL}/character/?page=${currentPage}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getCharacterById(
  characterId: string
): Promise<ICharacter> {
  const response = await fetch(
    `${RICK_AND_MORTY_API_URL}/character/${characterId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getCharactersFromUrls(
  charactersUrls: string[]
): Promise<ICharacter[]> {
  const characters = charactersUrls.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    return response.json();
  });

  return Promise.all(characters);
}
