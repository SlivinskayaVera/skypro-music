export type ChildrenType = { children: JSX.Element | JSX.Element[] };

export type ItemProps = {
  link: string;
  scrImg: string;
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
