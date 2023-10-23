import { AppProps } from "$fresh/server.ts";
import { loadSync } from "$std/dotenv/mod.ts";

loadSync({ envPath: ".env", export: true });

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh_template</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
