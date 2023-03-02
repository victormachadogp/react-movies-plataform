const MovieDetails = () => {
    return (
        <section className="movie-details">
            <div className="flex gap-12">
                <div className="movie-poster">

                </div>
                <div className="flex flex-col">
                    <h2 className="movie-title font-bold">Solteira Quase Surtando</h2>
                    <div className="movie-rated flex justify-between">
                        <p className="font-light">Comédia</p>
                        <span>8.4</span>
                    </div>
                    <div className="movie-description flex flex-col">
                        <span>Sinopse</span>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                        </p>

                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default MovieDetails