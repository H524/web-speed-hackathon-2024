import { inject } from 'regexparam';

import type { DomainSpecificApiClientInterface } from '../../../lib/api/DomainSpecificApiClientInterface';
import { apiClient } from '../../../lib/api/apiClient';

type TextApiClient = DomainSpecificApiClientInterface<{
  fetch: [{path: String}, GetViewTextResponse];
}>;

export const textApiClient: TextApiClient = {
  fetch: async (options) => {
    const response = await apiClient.get<GetViewTextResponse>(inject(`/api/v1/text/${options.path}`, {}));
    return response.data;
  },
  fetch$$key: (options) => ({
    requestUrl: `/api/v1/text/${options.path}`,
    ...options,
  }),
};
