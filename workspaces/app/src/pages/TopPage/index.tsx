import { map } from 'lodash';
import dayjs from 'dayjs';
import { Suspense, useId } from 'react';

// import { BookCard } from '../../features/book/components/BookCard';
// import { FeatureCard } from '../../features/feature/components/FeatureCard';
import { useFeatureList } from '../../features/feature/hooks/useFeatureList';
// import { RankingCard } from '../../features/ranking/components/RankingCard';
import { useRankingList } from '../../features/ranking/hooks/useRankingList';
import { useRelease } from '../../features/release/hooks/useRelease';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Spacer } from '../../foundation/components/Spacer';
import { Text } from '../../foundation/components/Text';
import { Color, Space, Typography } from '../../foundation/styles/variables';
import { getDayOfWeekStr } from '../../lib/date/getDayOfWeekStr';

const { BookCard } = lazyImport(() => import('../../features/book/components/BookCard'), 'BookCard');
const { FeatureCard } = lazyImport(() => import('../../features/feature/components/FeatureCard'), 'FeatureCard');
const { RankingCard } = lazyImport(() => import('../../features/ranking/components/RankingCard'), 'RankingCard');


import { CoverSection } from './internal/CoverSection';
import { lazyImport } from '../../../../client/src/utils/loadLazy';

const TopPage: React.FC = () => {
  const todayStr = getDayOfWeekStr(dayjs());
  const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });
  const { data: featureList } = useFeatureList({ query: {} });
  const { data: rankingList } = useRankingList({ query: {} });

  const pickupA11yId = useId();
  const rankingA11yId = useId();
  const todayA11yId = useId();

  return (
    <Flex align="flex-start" direction="column" gap={Space * 2} justify="center" pb={Space * 2}>
      <Box as="header" maxWidth="100%" width="100%">
        <CoverSection />
      </Box>
      <Box as="main" maxWidth="100%" width="100%">
        <Box aria-labelledby={pickupA11yId} as="section" maxWidth="100%" mt={16} width="100%">
          <Text as="h2" color={Color.MONO_100} id={pickupA11yId} typography={Typography.NORMAL20} weight="bold">
            ピックアップ
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden" height={223}>
            <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start">
              {map(featureList, (feature) => (
                <Suspense fallback={<>Loading...</>}>
                  <FeatureCard key={feature.id} book={feature.book}/>
                </Suspense>
              ))}
            </Flex>
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={rankingA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={rankingA11yId} typography={Typography.NORMAL20} weight="bold">
            ランキング
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="hidden" overflowY="hidden">
            <Flex align="center" as="ul" direction="column" justify="center">
              {map(rankingList, (ranking) => (
                <Suspense fallback={<>Loading...</>}>
                  <RankingCard key={ranking.id} book={ranking.book}/>
                </Suspense>
              ))}
            </Flex>
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={todayA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={todayA11yId} typography={Typography.NORMAL20} weight="bold">
            本日更新
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden" height={261}>
            <Flex align="stretch" gap={Space * 2} justify="flex-start">
              {map(release.books, (book) => (
                <Suspense fallback={<>Loading...</>}>
                  <BookCard key={book.id} book={book}/>
                </Suspense>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

const TopPageWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <TopPage />
    </Suspense>
  );
};

export { TopPageWithSuspense as TopPage };
