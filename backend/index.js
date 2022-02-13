const { Service } = require("verificac19-sdk");

const fastify = require("fastify")({
  logger: true,
});
fastify.register(require("fastify-cors"), {
  origin: "*",
  methods: ["*"],
});

const main = async () => {

    // Declare a route
    fastify.get("/", function (request, reply) {
        reply.send({ hello: "world" });
    });

    // Run the server!
    fastify.listen(3000, function (err, address) {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        // Server is now listening on ${address}
    });

    await Service.updateAll();
    console.log ("certificates updated")
}

main()