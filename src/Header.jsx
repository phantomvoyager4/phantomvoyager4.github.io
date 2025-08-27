import burger from './assets/burger.png'
import nightmode from './assets/nightmode.png'

function Header({ onBurgerClick }) {
  return (
    <header className="fixed top-0 left-0 w-full h-[115px] bg-black flex items-center justify-between px-4">
      <img src={burger} alt="Burger" className="w-24 cursor-pointer" onClick={onBurgerClick} />
      <div className='font-InriaSerif text-8xl'>Kashiami</div>
      <img src={nightmode} alt="Nightmode" className="w-16" />
    </header>
  );
}

export default Header