import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  image: string;
}

const CharacterCard: React.FC<Props> = ({ id, name, image }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <Link to={`/characters/${id}`}>
        <img src={image} alt={name} width={150} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default CharacterCard;
