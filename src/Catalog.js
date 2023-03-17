import FetchData from "./FetchData"

const Catalog = () => {
    const {data: movieData} = FetchData('https://api.themoviedb.org/3/movie/popular?api_key=13bed307564b94b94af8c359e589d92e&language=en-US&page=1')
    const {data: genreData} = FetchData('https://api.themoviedb.org/3/genre/movie/list?api_key=13bed307564b94b94af8c359e589d92e&language=pt-BR')

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


    return (
        <section>
            <div className="expanded-width catalog-title">
                <div className="max-w-5xl 2xl:max-w-6xl mx-auto flex items-center justify-between">
                    <h2 className="title"> <span className="font-bold">Catálogo</span> Completo</h2> 
                </div>
            </div>
             <div>
                <div className="flex justify-between my-10">
                    <div>
                        <button className="btn-primary">por gênero</button>
                        <button className="btn-secondary ml-4">mais populares</button>
                    </div>
                    <button className="btn-primary">em lista</button>
                </div>
                
                {/* To change view just remove/add the flex-col and w-full classes */}
                    {movieData && 
                        <div className="flex gap-2 flex-wrap">
                            {movieData.results.slice(0,6).map((item) => {
                                return <div className="catalog-element flex" key={item.id}>
                                           <img className="catalog-movie-img" src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title}/>
                                            <div>
                                            <p className="catalog-element-title">{item.title}</p>
                                                {genreData && <p className="catalog-element-genre">{getGenreName(item.genre_ids)}</p>}
                                                <p className="catalog-element-rate">{item.vote_average.toString().slice(0, 3)}</p>
                                                <p className="catalog-element-desc">{item.overview}
                                                </p>

                                            </div>
                                </div>
                            })}

                        </div>
                    
                    }

                <div className="flex justify-center my-20">
                    <button className="btn-secondary">carregar mais</button>
                </div>
             </div>
        </section>
    )
}

export default Catalog