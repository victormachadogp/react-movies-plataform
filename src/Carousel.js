import { useState } from "react"
import FetchData from "./FetchData"
import { useNavigate } from "react-router-dom";

const Carousel = () => {
    const {data: movieData} = FetchData('https://api.themoviedb.org/3/trending/movie/week?api_key=13bed307564b94b94af8c359e589d92e')
    const {data: genreData} = FetchData('https://api.themoviedb.org/3/genre/movie/list?api_key=13bed307564b94b94af8c359e589d92e&language=pt-BR')
    
    const navigate = useNavigate()

    // console.log(movieData.results[0].genre_ids)
    // console.log(genreData.genres)

    // Arrumar mais de uma requisção sendo feita no useEffect

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

    const [translateX, setTranslateX] = useState(0)
    const [counter, setCounter] = useState(0)

    const prevImage = () => {
        if(counter !== 0) {
            setTranslateX(translateX + 130)
            setCounter(counter - 1)
        }
    }

    const nextImage = () => {
        if(counter === 4) {
            setTranslateX(0)
            setCounter(0)
        } else {
        setTranslateX(translateX - 130)
        setCounter(counter + 1)
    }
    }

    const carouselStyle = {
        transform: `translateX(${translateX}px)`,
    }

    const goToDetails = (id) => {
        navigate((`/movie-details/${id}`))
    }

    return (
        <section className="expanded-width carousel">

            <div className="max-w-5xl 2xl:max-w-6xl mx-auto carousel-block">
                <h2 className='title'><span className="font-bold">Lançamentos</span> da Semana</h2>

                <div className="carousel-main">
                    <div style={carouselStyle} className="carousel-wrapper flex gap-10">
                        <div className="carousel-element">                           
                            {movieData &&
                                <div style={carouselStyle} className="carousel-wrapper flex gap-10">
                                    {movieData.results.slice(0,8).map((item) => {
                                        return <div className="carousel-element cursor-pointer" key={item.id} onClick={() => goToDetails(item.id)}>
                                                    <img className="carousel-movie-img" src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title}/>
                                                    <div className="flex flex-col">
                                                        <p className="carousel-movie-title">{item.title}</p>
                                                        {genreData && <p className="carousel-movie-genre">{getGenreName(item.genre_ids)}</p>}
                                                        
                                                        <p className="carousel-movie-rate flex items-center gap-2">
                                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_1586_95)">
                                                                <path d="M16.8041 7.70929H10.6666L8.81112 2L6.9556 7.70929H0.818115L5.81375 11.1349L3.88686 16.8442L8.81112 13.2759L13.7354 16.8442L11.8085 11.1349L16.8041 7.70929Z" fill="#FE3189" stroke="#FE3189" stroke-width="1.3956" stroke-linejoin="round"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_1586_95">
                                                                <rect width="18" height="16.3636" rx="4" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                            </svg>
                                                            {item.vote_average.toString().slice(0, 3)}
                                                            </p>
                                                    </div>
                                                </div>
                                    })}
                                </div>
                            }
                         </div>                        
                    </div>
                </div>

                <p>{counter}</p>

                <button className="prev-button" onClick={prevImage}>
                    <svg width="25" height="42" viewBox="0 0 25 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1586_125)">
                        <path d="M21.4394 3.59033L3.8103 21.2194L21.4394 38.8485" stroke="#EAEAEA" stroke-width="5.87636" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1586_125">
                        <rect width="25" height="42" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
                <button className="next-button" onClick={nextImage}>
                    <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1586_127)">
                        <path d="M3.03083 38.8486L20.6599 21.2196L3.03083 3.59047" stroke="#EAEAEA" stroke-width="5.87636" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1586_127">
                        <rect width="24" height="42" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                </button>
            </div>
        </section>
    )
}

export default Carousel