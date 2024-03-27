import React, { Component } from 'react';
import OnePieceService from '../../services/OnePiece.service';
import Cards from './Cards';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            personajes: [], 
            personajesMostrados: [],
            currentPage: 1,
            charactersPerPage: 12,
            footerHeight: 0 // Definir la altura del footer en el estado
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        OnePieceService.getAllCharacters()
            .then((data) => this.setState({ 
                personajes: data, 
                personajesMostrados: data.slice(0, this.state.charactersPerPage),
                footerHeight: document.querySelector('footer').offsetHeight // Calcular la altura del footer
            }))
            .catch((error) => console.error(error));
    }

    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { personajes, currentPage, charactersPerPage, footerHeight } = this.state;

        const indexOfLastCharacter = currentPage * charactersPerPage;
        const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
        const currentCharacters = personajes.slice(indexOfFirstCharacter, indexOfLastCharacter);

        const totalPages = Math.ceil(personajes.length / charactersPerPage);

        return (
            <main style={{ position: 'relative', paddingBottom: `${footerHeight}px` }}>
                <video autoPlay muted loop id="background-video" style={{ position: 'fixed', top: 0, left: 0, minWidth: '100%', minHeight: '100%', zIndex: -1 }}>
                    <source src="luffy-9.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                </video>
                <section className="py-5 container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6"style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <h1 className="fw-light text-start text-black">Personajes - One Piece App</h1>
                            <p className="fw-light text-start text-black">
                                One Piece es el manga más vendido de la revista Weekly Shōnen Jump (la más importante, reconocida y vendida del medio),
                                de la Editorial Shueisha, y de toda la historia de Japón, con más de 516 millones de copias vendidas a nivel mundial
                                (416 millones en Japón, y 100 millones en 60 países juntos), y en Japón fue el manga más vendido de manera consecutiva
                                desde el año 2007 hasta 2018 logrando un récord histórico. Es el manga que más ganancias ha reportado a su autor ostentando
                                el Récord Guinness como el manga con mayor cantidad de copias publicadas de la misma obra de cómic realizado por un único
                                autor en todo el mundo. En la encuesta realizada por la cadena de televisión japonesa TV Asahi para elegir los 100
                                Mejores mangas de la historia, One Piece alcanzó el puesto número 1.
                                El manga generó una franquicia de One Piece, la cual cuenta con una adaptación de anime, múltiples especiales de televisión,
                                OVAs, películas, videojuegos, obras de teatro, novelas ligeras, varios mangas spin-offs, y una adaptación de imagen real.
                            </p>
                        </div>
                    </div>
                </section>
                
                <div className="container" style={{ marginBottom: '2cm' }}>
                    <Cards personajes={currentCharacters} />
                </div>

                <div style={{ position: 'fixed', bottom: `${footerHeight + 20}px`, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', zIndex: '999' }}>
                    <button 
                        onClick={() => this.handlePageChange(currentPage - 1)} 
                        className="btn btn-dark"
                        disabled={currentPage === 1}
                    >
                        <img src="izquierda.png" alt="Previous" style={{ width: '40px', height: 'auto' }} />
                        PREVIOUS
                    </button>
                    <span className="mx-2 text-start text-black">Page {currentPage}</span>
                    <button 
                        onClick={() => this.handlePageChange(currentPage + 1)} 
                        className="btn btn-dark"
                        disabled={currentPage === totalPages}
                    >
                        NEXT
                        <img src="derecha.png" alt="Next" style={{ width: '40px', height: 'auto' }} />
                    </button>
                </div>
            </main>
        );
    }
}


