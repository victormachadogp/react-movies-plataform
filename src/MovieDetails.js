import { useParams } from "react-router-dom"
import FetchData from "./FetchData"

const MovieDetails = () => {

    const {id} = useParams()

    const {data: movieData} = FetchData(`https://api.themoviedb.org/3/movie/${id}?api_key=13bed307564b94b94af8c359e589d92e&language=pt-`)
    const {data: trailer} = FetchData(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=13bed307564b94b94af8c359e589d92e&language=en-US`)

    const getGenreName = (genreIds) => {
        const genreNames = genreIds.map((genre) => {
            return genre.name
        })
        return genreNames.join(", ")
    }

    return (
        <section className="movie">
            <div className="expanded-width movie-details py-24">
                <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
            
                    {movieData &&
                    <div className="flex gap-12">
                        <div className="movie-poster">
                            <img src={`http://image.tmdb.org/t/p/w300/${movieData.poster_path}`} alt={movieData.title} />
                        </div>
                        <div className="flex flex-col">
                            <h1>{id}</h1>
                            <h2 className="movie-title font-bold">{movieData.title}</h2>
                            <div className="movie-rated flex justify-between">
                                <p className="font-light">{getGenreName(movieData.genres)}</p>
                                <span>{movieData.vote_average.toString().slice(0, 3)}</span>
                            </div>
                            <div className="movie-description flex flex-col">
                                <span>Sinopse</span>
                                <p>
                                    {movieData.overview}
                                </p>

                            </div>
                        </div>
                    </div>
                        }
                </div>
            </div>

            <div className="movie-trailer mt-12">
                <h3 className="text-3xl	pb-2 mb-10">
                    Trailer
                </h3>
                <div>
                    {trailer && <iframe width="100%" height="650" src={`https://www.youtube.com/embed/${trailer.results.at(-1).key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                </div>

                <div className="flex justify-center mt-12">
                    <button className="btn-secondary">voltar</button>
                </div>
                

            </div>
 
        </section>
    )
}

export default MovieDetails