import Fastify from "fastify";

import addressSchema from "./schemas/address-v1.schema.json" assert { type: "json" };
import routes from "./routes.js";

export default async function buildApp() {
  const options = {
    /**
     * These settings are NOT suitable for production.
     */
    logger: {
      level: "debug",
      prettyPrint: true
    }
  };

  const fastify = Fastify(options);

  fastify.register(routes, { prefix: "/recipes" });
  fastify.addSchema(addressSchema);  

  return fastify;
}
