import { useState } from "react"
import FetchData from "./FetchData"

const Carousel = () => {
    const {data} = FetchData('https://api.themoviedb.org/3/trending/movie/week?api_key=13bed307564b94b94af8c359e589d92e')

    console.log(data)

    const [translateX, setTranslateX] = useState(0)
    const [counter, setCounter] = useState(0)

    const prevImage = () => {
        if(counter !== 0) {
            setTranslateX(translateX + 250)
            setCounter(counter - 1)
        }
    }

    const nextImage = () => {
        if(counter === 4) {
            setTranslateX(0)
            setCounter(0)
        } else {
        setTranslateX(translateX - 250)
        setCounter(counter + 1)
    }
    }

    const carouselStyle = {
        transform: `translateX(${translateX}px)`,
    }

    return (
        <section className="expanded-width carousel">


            {data &&
                <div>
                    {data.results.map((item) => {
                        return <div key={item.id}>{item.title}</div>
                    })}
                </div>
            }


            <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
                <h2 className='title'><span className="font-bold">Lançamentos</span> da Semana</h2>

                <div className="carousel-main">
                    <div style={carouselStyle} className="carousel-wrapper flex gap-10">
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>
                        <div className="carousel-element"> 
                            <div className="carousel-movie-img">Image</div>
                            <div className="flex flex-col">
                                <p>Follow Me</p>
                                <p className="carousel-movie-genre">Suspense, Terror</p>
                                <p className="carousel-movie-rate">8.4</p>
                            </div>
                         </div>                        
                    </div>
                </div>

                <p>{counter}</p>

                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </section>
    )
}

export default Carousel