const authenticate = (request, h) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return h.response({ message: 'Missing Authorization Header' }).code(401).takeover();
    }

    const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = credentials[0];
    const password = credentials[1];

    if (username === "Luke" && password === "DadSucks") {
        return h.continue;
    } else {
        return h.response({ message: 'Unauthorized' }).code(403).takeover();
    }
};

module.exports = { authenticate };
