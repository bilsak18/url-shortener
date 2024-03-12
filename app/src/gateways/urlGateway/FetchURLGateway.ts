import { IURLGateway, ShortenResponse } from './IURLGateway';

export class FetchURLGateway implements IURLGateway {
  async shorten(url: string): Promise<ShortenResponse> {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
        }),
      });

      return (await response.json()) as ShortenResponse;
    } catch (e) {
      let error = 'Unknown error while shortening the URL';

      if (e instanceof Error) {
        error = e.message;
      }

      if (typeof e === 'string') {
        error = e;
      }

      return Promise.resolve({ error });
    }
  }
}
