import { z } from 'zod';

const pokemonRequestSchema = z.object({
  address: z.string().min(1).max(255),
});

type PokemonRequestSchema = z.infer<typeof pokemonRequestSchema>;

export { pokemonRequestSchema, PokemonRequestSchema };
