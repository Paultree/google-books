
import styles from './App.module.scss'
import SearchBar from './assets/containers/SearchBar/SearchBar'
import InputValueProvider from './assets/contexts/InputValuesContext/InputValuesContext.jsx'
import CardGrid from './assets/containers/CardGrid/CardGrid';

function App() {
  

  return (
    <div className={styles.App}>
      <InputValueProvider>
        <SearchBar />
        <CardGrid />
      </InputValueProvider>
    </div>
  );
}

export default App
