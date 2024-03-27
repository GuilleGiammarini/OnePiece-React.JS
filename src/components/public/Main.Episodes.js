import React, { Component } from 'react';
import OnePieceService from '../../services/OnePiece.service';
import CardsEpisodes from './Cards.Episodes';

export default class MainEpisodes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            episodios: [], 
            episodiosMostrados: [],
            currentPage: 1,
            episodiosPerPage: 10,
            footerHeight: 0
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.setFooterHeight = this.setFooterHeight.bind(this);
    }

    componentDidMount() {
        OnePieceService.getAllEpisodes()
            .then((data) => this.setState({ 
                episodios: data, 
                episodiosMostrados: data.slice(0, this.state.episodiosPerPage) 
            }))
            .catch((error) => console.error(error));
        this.setFooterHeight();
        window.addEventListener('resize', this.setFooterHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setFooterHeight);
    }

    setFooterHeight() {
        const footer = document.getElementById('footer');
        if (footer) {
            const footerHeight = footer.clientHeight;
            this.setState({ footerHeight });
        }
    }

    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }
    render() {
        const { episodios, currentPage, episodiosPerPage, footerHeight } = this.state;
        const indexOfLastEpisodio = currentPage * episodiosPerPage;
        const indexOfFirstEpisodio = indexOfLastEpisodio - episodiosPerPage;
        const currentEpisodios = episodios.slice(indexOfFirstEpisodio, indexOfLastEpisodio);
        const totalPages = Math.ceil(episodios.length / episodiosPerPage);


        return (
            <main style={{ position: 'relative', paddingBottom: `${footerHeight}px` }}>
                <video autoPlay muted loop id="background-video" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: 'auto', zIndex: -1, objectFit: 'cover' }}>
                    <source src="portgas-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                <section className="py-5 container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6"style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <h1 className="fw-light text-start text-black">Episodios - One Piece App</h1>
                            <p className="fw-light text-start text-black">
                            One Piece es una serie de anime y manga que sigue las aventuras de los Piratas del Sombrero de Paja, liderados por Monkey D. Luffy. A lo largo de la serie, los piratas viajan a través de diferentes islas y océanos en busca del legendario tesoro conocido como "One Piece", que otorga el título de Rey de los Piratas a quien lo encuentre. La serie se compone de varios arcos narrativos, cada uno con su propia historia y desafíos para los protagonistas.

                            El primer arco, el Arco de East Blue, presenta a los personajes principales y cómo se unen para formar la tripulación de Luffy. A medida que avanzan, se enfrentan a diversos enemigos y desafíos, como el Arco de Alabasta, donde ayudan a la princesa Vivi a salvar su reino de un complot. Otros arcos notables incluyen el Arco de Skypiea, donde exploran una isla flotante y luchan contra el dios Eneru, y el Arco de Water 7/Enies Lobby, donde intentan rescatar a su amiga Robin del Gobierno Mundial.

                            Conforme avanza la serie, los piratas se encuentran con nuevos aliados y enemigos, exploran misteriosas islas y descubren secretos sobre el pasado y el mundo en el que viven. Cada arco aporta nuevos elementos a la trama principal y desarrolla tanto a los personajes como al mundo de One Piece. A través de sus aventuras, los Piratas del Sombrero de Paja se enfrentan a desafíos cada vez mayores en su búsqueda del tesoro definitivo y su sueño de convertirse en los más grandes piratas del mundo.
                            </p>
                        </div>
                    </div>
                </section>

                <div style={{ marginLeft: '4cm', marginRight: '2cm', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginBottom: '2cm', display: 'grid', gridGap: '1cm', justifyContent: 'center' }}>
                        <CardsEpisodes episodios={currentEpisodios} />
                    </div>
                </div>


                <div style={{ position: 'fixed', bottom: footerHeight + 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', zIndex: '999' }}>
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
