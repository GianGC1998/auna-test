import { gql } from "@apollo/client";
import { Character, List } from "../components/List";
import createApolloClient from "../config/apolloCLient";

const query = gql`
  query Characters {
    characters(page: 1) {
      results {
        name
        // TODO: add properties
      }
    }
  }
`;

export default async function Home() {
  const { data } = await useCharacters();

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-bold text-2xl">Auna test</h1>
      <List characters={data} />
    </div>
  );
}

export const useCharacters = async () => {
  const client = createApolloClient();
  const { data } = await client.query<{ characters: { results: Character[] } }>(
    {
      query,
    }
  );
  return { data: data.characters.results };
};
