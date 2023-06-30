import React from "react";
import { useGlobalhook } from "../Context";

const Search = () => {
  const {query, searchpost} = useGlobalhook();
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            placeholder="Search Here"
            value={query}
            onChange={(e) => searchpost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
