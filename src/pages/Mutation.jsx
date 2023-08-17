import { gql, useMutation } from "@apollo/client";

// createProduct -> methodName
/* record{
  name
 } */ // => what we want in return
const CREATE_PRODUCT = gql`
mutation CreateProduct(name: String!, quantity: Int!){
  createProduct(record: {name: $name, quantity: $quantity}){
    record{
      name
    }
  }
}
`;

function Mutation() {
  const [createNewProduct, { error, loading, data }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "Phone",
        quantity: 8,
      },
    }
  );
  console.log({ error, data, loading });
  return (
    <div>
      <button onClick={() => createNewProduct()}>Create</button>
    </div>
  );
}

export default Mutation;
