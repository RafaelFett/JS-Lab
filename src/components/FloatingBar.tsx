// src/components/FloatingBar.tsx
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function FloatingBar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed', // Fixa na tela
        top: 0, // No topo
        left: 0,
        width: '100%', // Largura total
        backgroundColor: '#333', // Fundo escuro
        color: 'white',
        padding: '10px',
        zIndex: 1000, // Garante que fique acima de outros elementos
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Sombra para destaque
      }}
    >
      <nav>
        <button onClick={() => navigate('/')}>
          <HomeIcon />
        </button>
        <button onClick={() => navigate('/character-sheet')}>
          Criar Personagem
        </button>
      </nav>
    </div>
  );
}
