import {json, LoaderArgs} from '@remix-run/node'

import { db } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";


export const loader = async ({ params: { jokeId } }: LoaderArgs) => {
  // console.log(params); // <-- {jokeId: "123"}
  const joke = await db.joke.findUnique({
    where: { id: jokeId },  
  });
  if (!joke) {
    throw new Error("Joke not found");
  }
  return json(joke);
};

export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>
        {data.content}
      </p>
    </div>
  );
}