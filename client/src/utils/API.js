import axios from "axios";

export default {
    // Get all Players
    getPlayers: function() {
        return axios.get("/api/players");
    },
    // Gets the player with the given id
    getPlayer: function(id){
        return axios.get("/api/players/" + id);
    },
    // Deletes the player with the given id
    deletePlayer: function(id){
        return axios.delete("/api/players/"+ id);
    },
    savePlayer: function(playerData){
        return axios.post("/api/players", playerData);
    }
};