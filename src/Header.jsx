import banner from './assets/banner.jpg'
import burger from './assets/burger.png'
import nightmode from './assets/nightmode.png'


function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[115px] bg-black flex items-center gap-[662px]">
      <img src={burger} alt="Burger" className="w-24" />
      <div className='font-InriaSerif text-8xl'>Kashiami</div>
      <img src={nightmode} alt="Nightmode" className="w-16" />
    </header>

  );
}



export default Header
