import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { useLoaderData, Link } from "@remix-run/react";

import movies from "../../mocks/movies";
import reviews from "../../mocks/reviews";
export const loader = async ({ params: { movieId } }: LoaderArgs) => {
    const movieReviews = reviews.filter(({ movie_id }) => movieId === String(movie_id));
  return json({
    reviews: movieReviews,
  });
};

export default function moviesIndexRoute() {
  const data = useLoaderData<loader>();
  
    return (
    <table>
      <thead>
        <td>Score</td>
        <td>Text</td>
      </thead>
      <tbody>
        {data.reviews.map(({ score, text }, i) => (
          <tr key={i}>
            <td>{score}</td>
            <td>{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
