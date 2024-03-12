import { IURLGateway, ShortenResponse } from "./IURLGateway";

export class MockURLGateway implements IURLGateway {
  async shorten(url: string): Promise<ShortenResponse> {
    if (url === "") {
      return Promise.resolve({ error: "ERROR" });
    }
    return Promise.resolve({ slug: "slug" });
  }
}
