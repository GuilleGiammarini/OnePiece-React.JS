import React, { useState } from 'react';

const Card = ({ personaje }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const traducirNombreTripulacion = (nombreTripulacion) => {
    switch (nombreTripulacion) {
      case "The Chapeau de Paille crew":
        return "The Straw Hat crew";
      case "Armarda du Chapeau de Paille":
        return "Straw Hat Army";
      default:
        return nombreTripulacion;
    }
  };

  const traducirNombreFruta = (nombreFruta) => {
    switch (nombreFruta) {
      case "Fruit Des Éclosions":
        return "Flower-Flower Fruit";
      default:
        return nombreFruta;
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="col">
      <div className="card shadow-sm my-card" style={{ width: '25rem', height: '35rem', backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
        <div className="card-body d-flex flex-column justify-content-between align-items-center">
          <div className="text-center">
            <h3 className="mb-0 text-dark">{personaje.name}</h3>
            <h5 className="mb-0 text-dark">{personaje.job}</h5>
            <p className="card-text" style={{ marginBottom: '5px' }}>Status: {personaje.status}</p>
            <p style={{ marginBottom: '5px' }}>Size: {personaje.size} - Age: {personaje.age}</p>
            <img
              src={`/images/${personaje.id}.png`}
              onError={(e)=>{e.target.onerror = null; e.target.src="/images/noimagen.png"}}
              alt={personaje.name}
              className="card-img-top"
              style={{ maxHeight: '320px', maxWidth: '100%', height: 'auto', width: 'auto', marginBottom: '5px' }}
            />
          </div>
          <div className="text-center">
            <p style={{ marginBottom: '5px' }}>Bounty: {personaje.bounty}</p>
            {personaje.fruit && <p style={{ marginBottom: '5px' }}>Fruit: {traducirNombreFruta(personaje.fruit.name)}</p>}
            {personaje.crew && <p style={{ marginBottom: '5px' }}>Crew: {traducirNombreTripulacion(personaje.crew.name)}</p>}
            {personaje.id === 1 && <button className="btn btn-primary" onClick={toggleModal}>MARCHAS</button>}
          </div>
        </div>
      </div>


      {modalOpen && (
        <div className="modal" tabIndex="-1" style={{ display: 'block'}}>
          <div className="modal-dialog" style={{maxWidth: '900px'}}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{personaje.name} - {personaje.job}</h5>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body">
                <h6>Segunda Marcha: </h6><p>Es un aumento drástico de la velocidad explosiva de la que es capaz de forma natura</p>
                <h6>Tercera Marcha: </h6><p>Consigue que sus músculos ganen una masa desmedida, lo que al mismo tiempo le proporciona el uso de una fuerza bruta muy superior a cuanto ostenta de manera base. Acababa reducido a un enano.</p>
                <h6>Cuarta Marcha: </h6><p>Con la Cuarta Marcha llegó el Luffy con el potencial suficiente para sobrepasar a los más poderosos de Los Siete Guerreros del Mar. Posee 3 variantes:</p> 
                    <p>Bounce Man: En esta forma, la defensa de Luffy aumenta dramáticamente dada su composición, pero también es capaz de utilizar algunos de los golpes más devastadores de cuantos se le han visto.</p>
                    <p>Tank Man: Requiere de que Luffy infle su cuerpo al límite al mismo tiempo que usa el Haki para, así, obtener la mayor cantidad de fuerza bruta que pueda amasar. Lógicamente, el estado físico en el que permanece provoca que su movilidad sea nula.</p>
                    <p>Snake Man: Es el estado por el cual Luffy alcanza la más elevada velocidad posible que permite su cuerpo.</p>
                <h6>Quinta Marcha: </h6><p>Es el resultado de que finalmente Luffy alcance 'El Despertar' de su Fruta del Diablo.
                                          Le da a Luffy libertad absoluta en cuanto a movimientos en combate, lo que provoca que la forma en la que pelea sea una tan única como ridícula.
                                          Una peculiaridad en este estado es que el ritmo del latido de su corazón adquiere una musicalidad especial. Asimismo, como con el resto, esta forma tiene graves consecuencias de su uso por primera vez, haciendo que Luffy envejezca MUCHO pasado cierto tiempo.
                                        </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}




    </div>
  );
};

export default Card;