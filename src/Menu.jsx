{/* bg-transparent and text-transparent for developing process - will work with it soon to make it visible*/}
function Menu() {
    return (
        <nav className="bg-transparent fixed top-0 left-0 w-50 h-full z-50">
            <div className="text-transparent font-InriaSerif text-lg">
            <div><a href="https://linktr.ee/kashiami" target="_blank">Linktree</a></div>
            <div><a href="mailto:obywatelnumer04230@gmail.com">Contact me directly</a></div>
            <div> About me</div>
            </div>
        </nav>
    );
}

export default Menu;