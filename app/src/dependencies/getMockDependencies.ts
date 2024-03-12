import { MockURLGateway } from '../gateways/urlGateway/MockURLGateway';
import { IDependencies } from './IDependencies';

export function getMockDependencies(): IDependencies {
  return {
    urlGateway: new MockURLGateway(),
  };
}
