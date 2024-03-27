import React, { Component } from 'react';
import OnePieceService from '../../services/OnePiece.service';
import CardsFruits from './Cards.Fruits';

export default class MainFruits extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            frutas: [], 
            frutasMostrados: [],
            currentPage: 1,
            frutasPerPage: 15,
            footerHeight: 0
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.setFooterHeight = this.setFooterHeight.bind(this);
    }

    componentDidMount() {
        OnePieceService.getAllFruits()
            .then((data) => this.setState({ 
                frutas: data, 
                frutasMostrados: data.slice(0, this.state.frutasPerPage) 
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
        const { frutas, currentPage, frutasPerPage, footerHeight } = this.state;
        const indexOfLastFruta = currentPage * frutasPerPage;
        const indexOfFirstFruta = indexOfLastFruta - frutasPerPage;
        const currentFrutas = frutas.slice(indexOfFirstFruta, indexOfLastFruta);
        const totalPages = Math.ceil(frutas.length / frutasPerPage);

        return (
            <main style={{ position: 'relative', paddingBottom: `${footerHeight}px` }}>
                <video autoPlay muted loop id="background-video" style={{ position: 'fixed', top: 0, left: 0, minWidth: '100%', minHeight: '100%', zIndex: -1 }}>
                    <source src="luffy-18.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                <section className="py-5 container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6"style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                            <h1 className="fw-light text-start text-black">Frutas del Diablo - One Piece App</h1>
                            <p className="fw-light text-start text-black">
                                Las frutas del diablo (悪魔の実 akuma no mi) son unas frutas misteriosas y peculiares repartidas por todo el mundo, conocidas por otorgar a sus consumidores poderes sobrehumanos permanentes, así como la incapacidad de nadar. Con una sola excepción notable, un individuo sólo puede adquirir los poderes de una única fruta del diablo y sobrevivir.
                                Cada fruta del diablo otorga un poder especial a quien la come, desde los poderes más simples, como estirarse como la goma, hasta poderes capaces de causar destrucción a gran escala, como la creación de terremotos. Cada fruta del diablo es única, y no hay otra igual; es decir, no hay una fruta del diablo que tenga el mismo poder que otra.
                            </p>
                        </div>
                    </div>
                </section>

                <div style={{ marginLeft: '4cm', marginRight: '2cm', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginBottom: '2cm', display: 'grid', gridGap: '1cm', justifyContent: 'center' }}>
                        <CardsFruits frutas={currentFrutas} />
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


