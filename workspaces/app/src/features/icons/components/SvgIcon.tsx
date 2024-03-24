// import * as Icons from '@mui/icons-material';
import {ArrowBack, NavigateNext, Close, Favorite, FavoriteBorder, Search} from '@mui/icons-material';

type Props = {
  color: string;
  height: number;
  type: String;
  width: number;
};

const IconType = {
  ArrowBack: ArrowBack,
  NavigateNext: NavigateNext,
  Close: Close,
  Favorite: Favorite,
  FavoriteBorder: FavoriteBorder,
  Search: Search
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  // eslint-disable-next-line
  const Icon = IconType[type];
  return <Icon style={{ color, height, width }} />;
};
