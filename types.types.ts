export type ChildrenType = { children: JSX.Element[] };

export type ItemProps = {
  name: string;
};

export type FilterType = {
  list: string[];
  title: string;
  isOpen: boolean;
  selected: string[] | string;
  toggleSelected?: (item: string) => void; 
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

type StaredUser = {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  username: string;
};
