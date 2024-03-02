type PropsType = {url: string, className: string}

export function SVG({url, className}: PropsType) {
  return (
    <svg className={className}>
      <use xlinkHref={`img/icon/sprite.svg#icon-${url}`}></use>
    </svg>
  );
}
