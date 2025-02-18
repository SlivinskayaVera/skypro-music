export type FilterType = {
  list: string[];
  title: string;
  isOpen: boolean;
  selected: string[] | string;
  counter: number | null;
  toggleDeleteSelector?: () => void;
  toggleSelected?: (item: string) => void;
  onClick: () => void;
};

export type RegistrationUserType = {
  email: string;
  password: string;
  userName: string;
};

export type InputPropsType = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export type Track = {
  album: string;
  author: string;
  duration_in_seconds: number;
  genre: string;
  _id: number;
  logo: null;
  name: string;
  release_date: string;
  staredUser: number[];
  track_file: string;
};

type StaredUser = {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  username: string;
};
