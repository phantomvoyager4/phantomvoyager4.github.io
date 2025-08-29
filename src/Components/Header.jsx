import burger from './assets/burger.png'
import nightmode from './assets/nightmode.png'
import { Link } from 'react-router-dom';

function Header({ onBurgerClick }) {
  return (
    <header className="fixed top-0 left-0 w-full h-[115px] bg-black flex items-center justify-between px-4">
      <img src={burger} alt="Burger" className="w-24 cursor-pointer" onClick={onBurgerClick} />
      <Link to="/" className='font-InriaSerif text-8xl text-white'>Kashiami</Link>
      <img src={nightmode} alt="Nightmode" className="w-16" />
    </header>
  );
}

export default Header