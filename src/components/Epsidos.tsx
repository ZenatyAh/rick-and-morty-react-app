import React from "react";

interface Episode {
  id: number;
  name: string;
  episode: string;
}

interface Props {
  episodes: Episode[];
}

const EpisodeList: React.FC<Props> = ({ episodes }) => {
  return (
    <div>
      <h4>Episodes:</h4>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id}>
            {ep.episode} - {ep.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
