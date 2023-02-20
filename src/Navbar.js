const NavBar = () => {
    return (
        <nav className="flex items-center justify-between">
            <p className="logo uppercase my-8">Shaun<span className="font-bold text-pink-500">Movies</span></p>
            <div className="flex uppercase space-x-4">
                <a href='#'>Início</a>
                <a href='#'>Catálogo</a>
                <div>Icon</div>
            </div>
        </nav>
    )
}

export default NavBar