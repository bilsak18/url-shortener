export interface IUrlDriver {
  addUrl: ({ url, slug }: { url: string; slug: string }) => boolean;
  retrieveSlug: (url: string) => string;
  retrieveUrl: (slug: string) => string;
}
