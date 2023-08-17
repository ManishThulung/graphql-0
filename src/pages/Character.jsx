import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

function Character() {
  const { id } = useParams();

  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return (
    data && (
      <div className="flex gap-8">
        <img
          src={data.character.image}
          alt="img"
          className="w-[600px] h-[60vh]"
        />
        <div>
          <h2 className="text-left text-3xl font-bold">
            {data.character.name}
          </h2>
          {data.character.episode.map((item, i) => (
            <div key={i}>
              <h3 className="text-left font-semibold text-lg">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Character;
