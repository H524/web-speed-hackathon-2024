import { Color, Typography } from "../styles/variables";
import { Text } from '../components/Text';
import { useViewText } from "../../features/text/hooks/useText";

export const Company: React.FC = () => {
  const { data: viewText } = useViewText({ path: 'company' });
  console.log(viewText)
  return (
    <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
      {viewText}
    </Text>
  );
};