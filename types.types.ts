export type ChildrenType = { children: JSX.Element[] };

export type ItemProps = {
  name: string;
  isLoading: boolean
};

export type FilterType = {
  list: Array<{ id: number; name: string }>;
  title: string;
  isOpen: boolean;
  onClick: () => void;
};

export type InputPropsType = {
  type: string;
  name: string;
  placeholder: string;
};

export type PropsType = { url: string; className: string };

export type Track = {
  album: string;
  author: string;
  duration_in_seconds: number;
  genre: string;
  id: number;
  logo: null;
  name: string;
  release_date: string;
  stared_user: StaredUser;
  track_file: string;
};

export type StaredUser = {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  username: string;
};
