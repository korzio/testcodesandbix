import {json, LoaderArgs} from '@remix-run/node'

import { useLoaderData, Link } from "@remix-run/react";

import movies from "../../mocks/movies";

export const loader = async ({ params: { movieId } }: LoaderArgs) => {
  return json({
    movie: movies.find(({ id }) => id.toString() === movieId),
  });
};

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data.movie) {
    throw new Error('Movie does not exist');
  }
  
  return (
    <div>
        <p>{data.movie.name}</p>
      <Link to={`/movies/${data.movie.id}/reviews`}>Reviews</Link>
    </div>
  );
}