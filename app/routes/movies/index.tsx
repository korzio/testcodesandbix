import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { useLoaderData, Link } from "@remix-run/react";

import movies from "../../mocks/movies";

export const loader = async ({ params }: LoaderArgs) => {
  return json({
    movies,
  });
};

export default function MoviesIndexRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <table>
      <thead>
        <td>ID</td>
        <td>Name</td>
        <td>Director</td>
        <td>Description</td>
        <td>Details</td>
      </thead>
      <tbody>
        {data.movies.map(({ id, name, director, description }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{director}</td>
            <td>{description}</td>
            <td>
              <Link to={`/movies/${id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
