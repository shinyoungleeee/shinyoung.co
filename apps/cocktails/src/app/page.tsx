import { log } from "@repo/logger";
import { CounterButton, Link } from "@repo/ui";

export const metadata = {
  title: "Lee Family Cocktail Menu",
};

export default function CocktailMenu(): JSX.Element {
  log("Hey! This is the Store page.");

  return (
    <div className="container">
      <h1 className="title">
        Cocktail Menu <br />
        <span>Shinyoung's Portfolio</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
