import FragmentLayout from './components/FragmentLayout';
import Combined from './components/Combined';

function App() {
  const showLayout = true;

  return (
    <>
      {showLayout && <FragmentLayout />}
      <hr />
      <Combined />
    </>
  );
}

export default App;