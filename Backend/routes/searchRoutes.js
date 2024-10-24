const { searchSWAPI, searchSingleSWAPI } = require('../controllers/searchController');

const routes = [
    {
        method: 'GET',
        path: '/api/search',
        handler: searchSWAPI
    },
    {
        method: 'GET',
        path: '/api/single',
        handler: searchSingleSWAPI
    }
];

module.exports = routes;
