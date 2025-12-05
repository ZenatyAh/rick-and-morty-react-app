import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById } from "../api/charactersService";

export const useCharacter = (id: string | number) => {
  return useQuery(["character", id], () => fetchCharacterById(id));
};
