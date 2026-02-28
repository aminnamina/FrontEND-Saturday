import Card from './components/Card';
import ProductList from './components/ProductList';
import Section from './components/Section';

function App() {
  const userName = 'Анна';

  return (
    <div>
      <Card title={`Привет, ${userName}!`} className="important">
        <p>Добро пожаловать в систему</p>
      </Card>

      <Section title="Каталог товаров на сегодня">
        <ProductList />
      </Section>
    </div>
  );
}

export default App;