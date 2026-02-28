import ItemList from './ItemList';

const Combined = () => {
  const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Манго'];
  const isEmpty = fruits.length === 0;

  return (
    <>
      <h2>Фрукты в наличии</h2>
      {isEmpty ? <p>Ничего нет</p> : <ItemList />}
      <p>Всего позиций: {fruits.length}</p>
    </>
  );
};

export default Combined;