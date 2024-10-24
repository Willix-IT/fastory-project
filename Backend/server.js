const Hapi = require("@hapi/hapi");
const searchRoutes = require("./routes/searchRoutes");
const { authenticate } = require("./middleware/authMiddleware");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
        credentials: true,
      },
    },
  });


// Condition pour laisser passer les CORS sans authenticate
  server.ext("onRequest", (request, h) => {
    if (request.method !== 'options') {
      return authenticate(request, h);
    }
    return h.continue;
  });

  server.route(searchRoutes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
