type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <li key={index} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </li>
        );
      })}
    </div>
  );
};
