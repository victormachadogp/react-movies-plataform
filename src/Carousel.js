import { useState } from "react"

const Carousel = () => {
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
            <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
                <h2 className='title uppercase'><span className="font-bold">Lançamentos</span> da Semana</h2>

                <div className="carousel-main">
                    <div style={carouselStyle} className="carousel-wrapper flex gap-10">
                        <div className="carousel-element"> 1 </div>
                        <div className="carousel-element"> 2 </div>
                        <div className="carousel-element"> 3 </div>
                        <div className="carousel-element"> 4 </div>
                        <div className="carousel-element"> 5 </div>
                        <div className="carousel-element"> 6 </div>
                        <div className="carousel-element"> 7 </div>
                        <div className="carousel-element"> 8 </div>
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