/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IUrlDriver } from './IUrlDriver.js';

export class JsonUrlDriver implements IUrlDriver {
  private urlMap: Map<string, string>;

  constructor(module) {
    this.urlMap = module.default;
  }

  private _checkExistingUrl(url: string): boolean {
    console.log('here', this.urlMap.get(url));
    return this.urlMap.has(url);
  }

  private _checkExistingSlug(slug: string): boolean {
    return Array.from(this.urlMap.values()).includes(slug);
  }

  /**
   * add url and its equivalent slug
   * @param param0 url and its equivalent slug
   * @returns true if operation is successful
   * @returns false if operation fails
   */
  addUrl({ url, slug }: { url: string; slug: string }): boolean {
    if (!url || !slug) {
      return false;
    }

    const exists = this._checkExistingUrl(url);

    if (exists) {
      return false;
    }

    // this.urlMap[url] = slug;
    this.urlMap.set(url, slug);

    return true;
  }

  /**
   * retrieve equivalent slug based on long url input
   * @param url long url for which to retrieve equivalent slug
   * @returns slug if url exists
   * @returns undefined if url does not exist
   */
  retrieveSlug(url: string): string | undefined {
    const exists = this._checkExistingUrl(url);

    if (!exists) {
      return;
    }

    return this.urlMap.get(url);
  }

  /**
   * retrieve the equivalent url based on the slug
   * @param slug the short string to which the original url is mapped
   * @returns the original url
   * @returns undefined if slug does not exist
   */
  retrieveUrl(slug: string): string | undefined {
    const exists = this._checkExistingSlug(slug);

    if (!exists) {
      return;
    }

    return Array.from(this.urlMap.keys()).find((url) => this.urlMap.get(url) === slug);
  }
}
