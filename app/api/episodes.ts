import { RICK_AND_MORTY_API_URL } from "@/config";
import { ApiResponse } from "@/types/apiResponse";
import { Episode } from "@/types/episode";

export async function getAllEpisodes(
  currentPage: string
): Promise<ApiResponse<Episode[]>> {
  const response = await fetch(
    `${RICK_AND_MORTY_API_URL}/episode?page=${currentPage}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getEpisodeById(episodeId: string): Promise<Episode> {
  const response = await fetch(
    `${RICK_AND_MORTY_API_URL}/episode/${episodeId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getEpisodesFromUrls(
  episodesUrls: string[]
): Promise<Episode[]> {
  const episodes = episodesUrls.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    return response.json();
  });

  return Promise.all(episodes);
}
