import { API_OP } from './../constants/Api.constants';

class OnePieceService {

    async getAllCharacters() {
        const response = await fetch(API_OP.CHARACTERS());
        if (!response.ok) {
            throw new Error('Error al obtener los personajes de One Piece');
        }
        return response.json();
    }

    async getCharacterById(id) {
        const response = await fetch(API_OP.CHARACTER_BY_ID(id));
        if (!response.ok) {
            throw new Error('Error al obtener el personaje de One Piece');
        }
        return response.json();
    }

    async getAllFruits(){
        const response = await fetch(API_OP.FRUITS());
        if (!response.ok) {
            throw new Error('Error al obtener las Frutas de One Piece');
        }
        return response.json();
    }

    async getFruitById(id){
        const response = await fetch(API_OP.FRUIT_BY_ID(id));
        if (!response.ok) {
            throw new Error('Error al obtener las Frutas de One Piece');
        }
        return response.json();
    }

    async getAllEpisodes(){
        const response = await fetch(API_OP.EPISODES());
        if (!response.ok) {
            throw new Error('Error al obtener los episodios de One Piece');
        }
        return response.json();
    }

    async getEpisodeById(id){
        const response = await fetch(API_OP.EPISODE_BY_ID(id));
        if (!response.ok) {
            throw new Error('Error al obtener los episodios de One Piece');
        }
        return response.json();
    }
}

export default new OnePieceService();