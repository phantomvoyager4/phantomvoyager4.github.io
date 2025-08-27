{/* bg-transparent and text-transparent for developing process - will work with it soon to make it visible*/}
function Menu() {
    return (
        <nav className="bg-transparent fixed top-0 left-0 w-50 h-full z-50">
            <ul className="text-transparent font-InriaSerif text-lg pt-4">
            <li><a href="https://linktr.ee/kashiami" target="_blank">Linktree</a></li>
            <li><a href="mailto:obywatelnumer04230@gmail.com">Contact me directly</a></li>
            <li> About me</li>
            </ul>
        </nav>
    );
}

export default Menu;