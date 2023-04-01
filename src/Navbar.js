import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isWriting, setisWriting] = useState(false);


    
    const handleSearch = () => {
        const searchBlock = document.querySelector(".search-box");
        console.log(searchBlock)
    }

    useEffect(() => {

        if(isWriting) {
            const timeoutId = setTimeout(() => {
                fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=13bed307564b94b94af8c359e589d92e`)
                  .then(response => response.json())
                  .then(data => {
                      setMovies(data.results)
                      setFilteredMovies(data.results)
                  })
                  .catch(error => console.error(error));
              }, 500);

              return () => {
                clearTimeout(timeoutId);
              };
        }
        
      }, [isWriting]);
    
    
      function handleInputChange(event) {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        setisWriting(true)

        if(term === "" || term === " " ) {
            setFilteredMovies([])
            return
        } 

        const filtered = movies.filter(movie => {
            return movie.original_title.toLowerCase().includes(term);
          });
          setFilteredMovies(filtered);

          console.log(filteredMovies)
      
      }




    return (
        <nav className="expanded-width">
            <div className="max-w-5xl 2xl:max-w-6xl mx-auto flex items-center justify-between">
                <p className="logo uppercase">Shaun<span className="font-bold text-pink-500">Movies</span></p>
                <div className="flex uppercase space-x-4">
                    <NavLink className="py-10" to="/">Início</NavLink>
                    <NavLink className="py-10" to="movie-details">Catálogo</NavLink>
                    <div onClick={handleSearch} className="py-10">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1586_138)">
                        <path d="M9.98598 0.922852C8.19352 0.922852 6.4413 1.45438 4.95092 2.45022C3.46053 3.44607 2.29892 4.86149 1.61297 6.51752C0.927022 8.17355 0.747547 9.99579 1.09724 11.7538C1.44693 13.5118 2.31009 15.1267 3.57756 16.3942C4.84502 17.6616 6.45988 18.5248 8.2179 18.8745C9.97593 19.2242 11.7982 19.0447 13.4542 18.3587C15.1102 17.6728 16.5257 16.5112 17.5215 15.0208C18.5173 13.5304 19.0489 11.7782 19.0489 9.98574C19.0487 7.58216 18.0938 5.27707 16.3942 3.57748C14.6947 1.87789 12.3896 0.923005 9.98598 0.922852V0.922852Z" stroke="#EAEAEA" strokeWidth="2.30769" strokeMiterlimit="10"/>
                        <path d="M16.7476 16.7476L23.077 23.077" stroke="#EAEAEA" strokeWidth="2.30769" strokeMiterlimit="10" strokeLinecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1586_138">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </div>
                </div>
            </div>
            <div className="search-box">
                <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
                    <input className="w-full" type="text" value={searchTerm} onChange={handleInputChange} />
                    <div className="movie-list pb-20">
                            {filteredMovies.map((movieFiltered) => {
                                return <div key={movieFiltered.id}>{movieFiltered.original_title}</div>
                            })}    
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar