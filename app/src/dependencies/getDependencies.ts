import { getMockDependencies } from "./getMockDependencies";
import { getProdDependencies } from "./getProdDependencies";

export function getDependencies(isDevMode: boolean) {
  if (isDevMode) {
    return getMockDependencies();
  }

  return getProdDependencies();
}
