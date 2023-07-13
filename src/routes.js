import recipeSchema from "./schemas/recipe-v1.schema.json" assert { type: "json" };

export default async function routes(fastify) {
  fastify.post(
    "/",
    { schema: { body: recipeSchema } },
    async function createRecipe(request, reply) {
      const newRecipe = request.body;

      if (!newRecipe) {
        throw new Error("Error creating recipe");
      }

      // In a real application we would do something with the recipe here

      request.log.info("New recipe created");

      reply.status(201);

      return newRecipe;
    }
  );
}
