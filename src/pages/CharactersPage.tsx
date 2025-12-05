import React, { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import SearchInput from "../components/SearchBox";

const CharactersPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useCharacters(search);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading characters</p>;

  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      <SearchInput value={search} onChange={setSearch} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.results.map((char: any) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
