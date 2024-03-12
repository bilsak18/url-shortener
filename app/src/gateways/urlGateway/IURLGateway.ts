export type ShortenResponse =
  | { slug: string; error?: never }
  | { slug?: never; error: string };

export interface IURLGateway {
  shorten(url: string): Promise<ShortenResponse>;
}
