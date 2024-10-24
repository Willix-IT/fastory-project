const axios = require('axios');

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

// Requête pour vérifier les résultats disponibles
const fetchFromSWAPI = async (query, type) => {
    try {
        let url = `${SWAPI_BASE_URL}${type}/?search=${query}`
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching from SWAPI');
    }
};

// Requête pour obtenir les informations d'un résultat en particulier
const fetchSingleFromSWAPI = async (id, type, wookiee) => {
    try {
        wookiee = wookiee === 'true'
        let url = `${SWAPI_BASE_URL}${type}/${id}${wookiee ? '/?format=wookiee' : ''}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching from SWAPI');
    }
};

module.exports = { fetchFromSWAPI, fetchSingleFromSWAPI };
