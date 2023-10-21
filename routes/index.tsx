import { Head } from "$fresh/runtime.ts";
import { localCssPath } from "../utils/local-css-path.ts";

export default function Home() {
  const css = localCssPath(import.meta.url);

  console.log(css);

  return (
    <>
      <Head>
        <link rel="stylesheet" href={css} />
      </Head>
      <div>
        hello world
      </div>
    </>
  );
}
