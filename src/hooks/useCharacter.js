import { gql, useQuery } from "@apollo/client";

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

export const useCharacter = () => {
  const { error, data, loading } = useQuery(GET_LOCATIONS);
  return {
    error,
    data,
    loading,
  };
};
