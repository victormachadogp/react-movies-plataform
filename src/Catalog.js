const Catalog = () => {
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
                <div className="flex gap-2 flex-wrap">
                    <div className="catalog-element">1</div>
                    <div className="catalog-element">2</div>
                    <div className="catalog-element">3</div>
                    <div className="catalog-element">4</div>
                    <div className="catalog-element">5</div>
                    <div className="catalog-element">6</div>
                </div>

                <div className="flex justify-center my-20">
                    <button className="btn-secondary">carregar mais</button>
                </div>
             </div>
        </section>
    )
}

export default Catalog