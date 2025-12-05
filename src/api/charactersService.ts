import axios from "axios";

export const fetchCharacters = async (name?: string) => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character`, {
    params: { name }
  });
  return res.data;
};

export const fetchCharacterById = async (id: string | number) => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return res.data;
};
