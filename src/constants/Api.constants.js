export const API_OP ={
    URL: "https://api.api-onepiece.com/v2",

    CHARACTERS : function (){
        return `${this.URL}/characters/en`
    },

    CHARACTER_BY_ID : function(id){
        return `${this.URL}/characters/en/${id}`
    },

    FRUITS : function(){
        return `${this.URL}/fruits/en`
    },

    FRUIT_BY_ID : function(id){
        return `${this.URL}/fruits/en/${id}`
    },

    EPISODES : function(){
        return `${this.URL}/episodes/en`
    },

    EPISODE_BY_ID : function(id){
        return `${this.URL}/episodes/en/${id}`
    },
}