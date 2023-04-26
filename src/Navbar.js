import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import FetchData from "./FetchData"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isWriting, setisWriting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const {data: genreData} = FetchData('https://api.themoviedb.org/3/genre/movie/list?api_key=13bed307564b94b94af8c359e589d92e&language=pt-BR')
    

    const navigate = useNavigate()

    const handleSearch = () => {
        setIsVisible(!isVisible);
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

      const getGenreName = (genreIds) => {
        const genreNames = []
        let genreCount = 0;
        genreIds.forEach((id) => {
            const genre = genreData.genres.find((genre) => genre.id === id);
            if (genre && genreCount < 2) {
                genreNames.push(genre.name);
                genreCount++
            }
        })
        return genreNames.join(", ")
    }

    const goToDetails = (id) => {
        navigate((`/movie-details/${id}`))
        setIsVisible(false)
    }

    const toggleMobileMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }




    return (
        <nav className="expanded-width">
            <div className="max-w-5xl 2xl:max-w-6xl mx-auto flex items-center justify-between">
                <div className="navbar-menu-block md:hidden" onClick={toggleMobileMenu}>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1822_109)">
                    <path d="M1 1H23M1 7H23M1 13H23" stroke="#EAEAEA" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1822_109">
                    <rect width="24" height="14" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                {isMenuVisible &&
                <div className="navbar-menu">
                    <div className="flex flex-col uppercase space-x-4">
                        <NavLink className="py-10 md:hidden" to="/">Início</NavLink>
                        <NavLink className="py-10 md:hidden" to="movie-details">Catálogo</NavLink>                    
                    </div>
                </div>
                }
                </div>
                <p className="logo uppercase">Shaun<span className="font-bold text-pink-500">Movies</span></p>
                <div className="flex uppercase space-x-4">
                    <NavLink className="py-10 hidden md:block" to="/">Início</NavLink>
                    <NavLink className="py-10 hidden md:block" to="movie-details">Catálogo</NavLink>
                    <div onClick={handleSearch} className="py-10 cursor-pointer">
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
            {isVisible && 
            <div className="search-wrapper">
            <div className="search-box">
                <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
                    <input className="w-full" type="text" value={searchTerm} onChange={handleInputChange} />
                    <div className="movie-list pb-1">
                            {filteredMovies.slice(0,1).map((movieFiltered) => {
                                return <div className="movie-search-result cursor-pointer" key={movieFiltered.id} onClick={() => goToDetails(movieFiltered.id)}>
                                            <img src={`http://image.tmdb.org/t/p/w300/${movieFiltered.poster_path}`} alt={movieFiltered.title} key={movieFiltered.id} />
                                            <div className="movie-search-result-info mt-4">
                                                <p className="movie-search-result-title">{movieFiltered.original_title}</p> 
                                                {genreData && <p className="movie-search-result-genre">{getGenreName(movieFiltered.genre_ids)}</p>}
                                                <p className="movie-search-result-rate">{movieFiltered.vote_average.toString().slice(0, 3)}</p>
                                            </div>
                                      </div>
                            })}    
                    </div>
                    
                </div>
            </div>
            </div>
            }
        </nav>
    )
}

export default NavBar