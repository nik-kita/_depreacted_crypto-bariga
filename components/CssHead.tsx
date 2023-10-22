import { Head, IS_BROWSER } from "$fresh/runtime.ts";
import { fromFileUrl } from "$std/path/mod.ts";

type Props = {
  importMetaUrl: string;
};

export default function CssHead({
  importMetaUrl,
}: Props) {
  if (IS_BROWSER) {
    return <></>;
  }
  const css = `css${fromFileUrl(importMetaUrl).split(Deno.cwd()).at(-1)}`
    .replace(/\..*$/, ".css");

  return (
    <Head>
      <link rel="stylesheet" href={css} />
    </Head>
  );
}
