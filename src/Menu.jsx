import menuclose from './assets/menuclose.png'
function Menu({ open, onClose }) {
    return (
        <nav className={`border-r border-t border-b border-white bg-black fixed top-0 left-0 w-50 h-full z-50 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex">
              <img src={menuclose} alt="Close Menu" className="ml-auto pt-2 pr-2 cursor-pointer" onClick={onClose} />
            </div>
            <ul className="text-white font-InriaSerif text-lg pt-2 pl-2">
              <li><a href="https://linktr.ee/kashiami" target="_blank">Linktree</a></li>
              <li><a href="mailto:obywatelnumer04230@gmail.com">Direct contact</a></li>
              <li><a href="https://github.com/phantomvoyager4/phantomvoyager4.github.io" target="_blank">Github repo</a></li>
              <li className="cursor-pointer">About me</li>
            </ul>
        </nav>
    );
}

export default Menu;