import React from "react";
import { useQuery, gql } from "@apollo/client";
const FILMS_QUERY = gql`
query MyQuery {
    users {
      username
      gender
      age
      id
      Mobile_Number
    }
  }
`;
 export default function Home(){
const { data, loading, error } = useQuery(FILMS_QUERY);
if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <div>
      <h1>SLASH DR</h1>
      <ul>
        {data.users.map((item) => (
            <div>
          <li key={item.id}>{item.username}-  {item.age}</li>
        
          </div>
        ))}
      </ul>
    </div>
  );
}

