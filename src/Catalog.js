const Catalog = () => {
    return (
        <section>
            <div className="expanded-width catalog-title">
                <div className="max-w-5xl 2xl:max-w-6xl mx-auto flex items-center justify-between">
                    <h2 className="title"> <span className="font-bold">Catálogo</span> Completo</h2> 
                </div>
            </div>
             <div>
                <div className="flex justify-between">
                    <div>
                        <button className="btn-primary">por gênero</button>
                        <button className="btn-secondary ml-4">mais populares</button>
                    </div>
                    <button className="btn-primary">Lista</button>
                </div>
             </div>
        </section>
    )
}

export default Catalog