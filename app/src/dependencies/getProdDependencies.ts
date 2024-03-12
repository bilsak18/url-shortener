import { FetchURLGateway } from "../gateways/urlGateway/FetchURLGateway";
import { IDependencies } from "./IDependencies";

export function getProdDependencies(): IDependencies {
  return {
    urlGateway: new FetchURLGateway(),
  };
}
