import useSWR from 'swr';

import { textApiClient } from '../apiClient/textApiClient';

export function useViewText(...[options]: Parameters<typeof textApiClient.fetch>) {
  return useSWR(textApiClient.fetch$$key(options), textApiClient.fetch, { suspense: true });
}
