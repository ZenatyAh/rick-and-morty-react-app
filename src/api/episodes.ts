import axios from "axios";

export const fetchEpisodesByIds = async (ids: string[]) => {
  if (ids.length === 0) return [];
  const res = await axios.get(`https://rickandmortyapi.com/api/episode/${ids.join(",")}`);
  return res.data;
};
