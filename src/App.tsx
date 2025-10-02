import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import DataStructures from './pages/data-structures/DataStructure';
import FloatingBar from './components/FloatingBar';
import CharacterSheet from './pages/character-sheet/CharacterSheet'

function App() {
  return (
    <>
      <FloatingBar /> {/* ← Barra flutuante aqui, fora das rotas */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/data-structures' element={<DataStructures />} />
        <Route path='/character-sheet' element={<CharacterSheet />} />
      </Routes>
    </>
  );
}

export default App;
