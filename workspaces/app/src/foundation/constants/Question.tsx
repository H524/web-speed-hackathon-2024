import { Color, Typography } from "../styles/variables";
import { Text } from '../components/Text';
import { useViewText } from "../../features/text/hooks/useText";

export const Question: React.FC = () => {
  const { data: viewText } = useViewText({ path: 'question' });
  console.log(viewText)
  return (
    <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
      {viewText}
    </Text>
  );
};
