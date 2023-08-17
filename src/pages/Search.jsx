import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
  query getCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");

  const [getLocations, { error, data, loading, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name: name,
      },
    }
  );
  console.log({ data, error, loading, called });

  return (
    <>
      <div>Search</div>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="search..."
        className="border-2"
      />
      <button onClick={() => getLocations()}>search</button>

      {loading && <div>loading...</div>}
      {data &&
        data.characters.results.map((item, i) => (
          <ul key={i}>
            <li className="text-2xl py-4">{item.location.name}</li>
          </ul>
        ))}
    </>
  );
}

export default Search;
