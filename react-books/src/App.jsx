
import styles from './App.module.scss'
import SearchBar from './assets/containers/SearchBar/SearchBar'
import InputValueProvider from './assets/contexts/InputValuesContext/InputValuesContext.jsx'
import CardGrid from './assets/containers/CardGrid/CardGrid';

function App() {
  

  return (
    <InputValueProvider>
      
      <SearchBar />
      <CardGrid />
        
      
    </InputValueProvider>
  );
}

export default App
