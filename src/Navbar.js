import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="expanded-width">
            <div className="max-w-5xl 2xl:max-w-6xl mx-auto flex items-center justify-between">
                <p className="logo uppercase">Shaun<span className="font-bold text-pink-500">Movies</span></p>
                <div className="flex uppercase space-x-4">
                    <NavLink className="py-10" to="/">Início</NavLink>
                    <NavLink className="py-10" to="movie-details">Catálogo</NavLink>
                    <div className="py-10">Icon</div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar