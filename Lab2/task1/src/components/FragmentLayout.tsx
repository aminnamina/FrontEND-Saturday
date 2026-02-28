const FragmentLayout = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <header>
        <h1>Мой сайт</h1>
        <nav>Главная | О нас | Контакты</nav>
      </header>
      <main>
        <p>Добро пожаловать! Сейчас {year} год.</p>
      </main>
      <footer>
        <p>Все права защищены © {year}</p>
      </footer>
    </>
  );
};

export default FragmentLayout;