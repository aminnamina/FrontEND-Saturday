import Card from './Card';

const ProductList = () => {
  const products = [
    { id: 101, name: 'Ноутбук', price: 999.99, stock: 5 },
    { id: 102, name: 'Мышь', price: 29.99, stock: 0 },
    { id: 103, name: 'Клавиатура', price: 79.99, stock: 12 }
  ];

  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);

  return (
    <>
      {products.map(product => (
        <Card
          key={product.id}
          title={product.name}
          className={product.stock === 0 ? 'out-of-stock' : ''}
        >
          <p>Цена: ${product.price}</p>
          <p>На складе: {product.stock > 0 ? product.stock : 'Нет в наличии'}</p>
        </Card>
      ))}
      <p>Общая стоимость запасов: ${totalValue.toFixed(2)}</p>
    </>
  );
};

export default ProductList;