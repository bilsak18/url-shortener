export type ShortenResult =
  | { slug: string; error?: never }
  | { slug?: never; error: string };
