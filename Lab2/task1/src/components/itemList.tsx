const ItemList = () => {
  const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Манго'];

  return (
    <ol>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit.toUpperCase()}</li>
      ))}
    </ol>
  );
};

export default ItemList;