import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacterDetails";
import { useQuery } from "@tanstack/react-query";
import { fetchEpisodesByIds } from "../api/episodes";
import EpisodeList from "../components/Epsidos";

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useCharacter(id!);

  const episodeIds = character?.episode.map((ep: string) => ep.split("/").pop());
  const { data: episodes } = useQuery(
    ["episodes", episodeIds],
    () => fetchEpisodesByIds(episodeIds),
    { enabled: !!episodeIds }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading character</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <EpisodeList episodes={episodes || []} />
    </div>
  );
};

export default CharacterDetailsPage;
