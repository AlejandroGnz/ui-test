import React from "react";
import "./PostHeader.scss";

interface Props {
  onChange?: (e: string) => void;
}
const PostHeader: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="posts-header">
      <h2 className="posts-header__title">Previous Rulings</h2>
      <div className="select">
        <select
          className="select__select"
          defaultValue="grid"
          onChange={({ target }) => {
            if (onChange) {
              onChange(target.value);
            }
          }}
        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
      </div>
    </div>
  );
};

export default PostHeader;
