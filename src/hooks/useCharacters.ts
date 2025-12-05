import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/charactersService";

export const useCharacters = (name?: string) => {
  return useQuery(["characters", name], () => fetchCharacters(name), {
    keepPreviousData: true,
  });
};
