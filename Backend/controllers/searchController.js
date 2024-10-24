const { fetchFromSWAPI, fetchSingleFromSWAPI } = require('../utils/swapiHelper');

const searchSWAPI = async (request, h) => {
    const { query, type } = request.query;

    if (!query || !type ) {
        return h.response({ message: 'Query and type are required' }).code(400);
    }

    try {
        const data = await fetchFromSWAPI(query, type);
        return h.response(data).code(200);
    } catch (error) {
        return h.response({ message: 'Error fetching data from SWAPI', error }).code(500);
    }
};

const searchSingleSWAPI = async (request, h) => {
    const { id, type, wookiee } = request.query;
    if (!id || !type ) {
        return h.response({ message: 'Missing id or type' }).code(400);
    }

    try {
        const data = await fetchSingleFromSWAPI(id, type, wookiee);
        return h.response(data).code(200);
    } catch (error) {
        return h.response({ message: 'Error fetching data from SWAPI', error }).code(500);
    }
};

module.exports = { searchSWAPI, searchSingleSWAPI };
