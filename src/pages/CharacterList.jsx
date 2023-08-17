import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
const GET_LOCATIONS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function CharacterList() {
  const { error, data, loading } = useQuery(GET_LOCATIONS);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return (
    <>
      {data && (
        <div className="flex flex-wrap gap-8">
          {data.characters.results.map((item, i) => (
            <Link to={`/${item.id}`} key={i}>
              <img src={item.image} alt="img" />
              <h2>{item.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default CharacterList;
