import React, { useState } from "react";
import "./TagForm.css";

const TagForm = ({ addTag, index }) => {
  const [newTag, setNewTag] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTag(newTag, index);
      setNewTag("");
    }
  }
  return (
    <form
      onKeyDown={handleKeyDown}
    >
      <input
        className="tag-form"
        placeholder="Add tag"
        type="text"
        value={newTag}
        onChange={(e) => {
          e.preventDefault();
          setNewTag(e.target.value);
        }}
      />
    </form>
  );
};

export default TagForm;
