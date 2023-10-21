import { fromFileUrl } from "$std/path/mod.ts";

export function localCssPath(importMetaUrl: string) {
  const __filename = fromFileUrl(importMetaUrl);

  console.log(Deno.cwd());

  return `css${__filename.split(Deno.cwd()).at(-1)}`.replace(/\..*$/, ".css");
}
