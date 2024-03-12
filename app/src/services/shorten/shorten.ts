import { IDependencies } from '../../dependencies/IDependencies';
import { getDependencies } from '../../dependencies/getDependencies';
import { isDevMode } from '../../utils/isDevMode';
import { ShortenResult } from './types';

/**
 * a service that calls the right gateway to shorten the url and returns its result
 * @param url url to be shortened
 * @returns either a short slug or an error in case request fails
 */
const shorten =
  (dependencies: IDependencies) =>
  async (url: string): Promise<ShortenResult> => {
    const result = await dependencies.urlGateway.shorten(url);
    return result;
  };

export default shorten(getDependencies(isDevMode));
