import React from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "5px", marginBottom: "20px", width: "100%" }}
    />
  );
};

export default SearchInput;
