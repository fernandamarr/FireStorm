import axios from "axios";

export default {
    // Get all Players
    getPlayers: function () {
        return axios.get("/api/player");
    },
    // Gets the user with the given id
    getPlayer: function (id) {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        return axios.get("/api/player/" + id);
    },
    // Deletes the player with the given id
    deletePlayer: function (id) {
        return axios.delete("/api/player/" + id);
    },
    savePlayer: function (playerData) {
        return axios.post("/api/player", playerData);
    },
    signupUser: function (playerData) {
        console.log("signing up user")
        return axios.post("/api/player/signup", playerData);
    },
    loginUser: function (playerData) {
        console.log("login in user")
        return axios.post("/api/player/login", playerData);
    },
};